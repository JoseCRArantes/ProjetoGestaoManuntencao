import { PedidoManutCurativaTeste } from "./pedidoMcurativa.model";
import { Injectable } from "@angular/core";
import { Subject, Observable, throwError, bindCallback } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { retry, catchError, map } from "rxjs/operators";
import { Equipamento } from "../equipamento/equipamentomodel";
import { EstadoIntervencao } from "../estadoIntervencao/estadoIntervencao.model";
import { GrupoMaquina } from "../gruposmaquina/grupomaquinamodel";
import { IntervencaoCurativa } from "./intervencaoCurativa.model";

import { environment } from "./../environments/environments";
const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class PedidosService {
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }),
    withCredentials: true,
  };

  pedidos: PedidoManutCurativaTeste[] = [];
  
  private pedidosUpdated = new Subject<{
    pedidos: PedidoManutCurativaTeste[];
    CountPedidos: number;
  }>();
  countPedidos: number;
  intervencoes: IntervencaoCurativa[] = [];
  private intervencoesUpdated = new Subject<IntervencaoCurativa[]>();

  constructor(private httpClient: HttpClient) {}

  getPedidos(pedidosPerPage: number, currentPage: number, selectOptionGrupo:number, selectedOptionDateInicio: string, selectedOptionDateFim: string, selectedOptionEquipamento:number) {
    const queryParms = `?pedidosPerPage=${pedidosPerPage}&currentPage=${currentPage}&grupoMaquina=${selectOptionGrupo}&dataInicio=${selectedOptionDateInicio}&dataFim=${selectedOptionDateFim}&equipamentoId=${selectedOptionEquipamento}`;
    this.httpClient
      .get<{
        PedidoManutCurativaList: PedidoManutCurativaTeste[];
        CountPedidos: number;
      }>(BACKEND_URL + "/PedidoManutCurativas" + queryParms, this.httpOptions)
      .pipe(
        map((pedidoCurativaData) => {
          return {
            PedidoManutCurativaList: pedidoCurativaData.PedidoManutCurativaList.map(
              (pedidoCurativo) => {
                return {
                  IDPedido: pedidoCurativo.IDPedido,
                  UtilizadorIDUser: pedidoCurativo.UtilizadorIDUser,
                  IDEquipamento: pedidoCurativo.IDEquipamento,
                  Descricao: pedidoCurativo.Descricao,
                  DataPedido: pedidoCurativo.DataPedido,
                };
              }
            ),
            pedidoCurativoCount: pedidoCurativaData.CountPedidos,
          };
        })
      )
      .subscribe((pedidosCurativa) => {
        this.countPedidos = pedidosCurativa.pedidoCurativoCount;
        console.log("numero de pedidos", pedidosCurativa.pedidoCurativoCount);
        this.pedidos = pedidosCurativa.PedidoManutCurativaList;
        this.pedidosUpdated.next({
          pedidos: [...this.pedidos],
          CountPedidos: this.countPedidos,
        });
      });
  }

  getIntervencoes() {
    this.httpClient
      .get<any[]>(BACKEND_URL + "/IntervencaoCurativas", this.httpOptions)
      .subscribe((intervencoes) => {
        let transformedintervencoes: IntervencaoCurativa[] = [];
        for (let x = 0; x < intervencoes.length; x++) {
          let transformedIntervencao: IntervencaoCurativa = {
            ID: intervencoes[x].ID,
            IDPedido: intervencoes[x].IDPedido,
            UtilizadorIDUser: intervencoes[x].UtilizadorIDUser,
            Descricao: intervencoes[x].Descricao,
            IDEstadoIntervencao: intervencoes[x].IDEstadoIntervencao,
            DataFimIntervencao: intervencoes[x].DataFimIntervencao,
            DataInicioIntervencao: intervencoes[x].DataInicioIntervencao,
          };
          transformedintervencoes.push(transformedIntervencao);
        }
        this.intervencoes = transformedintervencoes;
        this.intervencoesUpdated.next([...this.intervencoes]);
      });
  }

  getPedidoUpdateListener() {
    return this.pedidosUpdated.asObservable();
  }

  //POST PEDIDO
  async postPedido(data) {
    await this.httpClient
      .post<any>(
        BACKEND_URL + "/PedidoManutCurativas",
        JSON.stringify(data),
        this.httpOptions
      )
      .toPromise().then(res => {
          this.pedidos.push(data);
          this.countPedidos = this.countPedidos + 1;
          this.pedidosUpdated.next({
            pedidos: [...this.pedidos],
            CountPedidos: this.countPedidos,
        });
    });
  }

  postIntervencao(data) {
    this.httpClient
      .post<any>(
        BACKEND_URL + "/IntervencaoCurativas",
        JSON.stringify(data),
        this.httpOptions
      )
      .toPromise()
      .then((res) => {
        console.log(res);
        this.intervencoes.push(res);
        this.intervencoesUpdated.next([...this.intervencoes]);
      })
      .catch((err) => {});
  }

  getIntervencaoUpdateListener() {
    return this.intervencoesUpdated.asObservable();
  }

  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get erro lado cliente
      errorMessage = error.error.message;
    } else {
      // Get erro lado servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // DELETE
  DeleteIntervencao(id) {
    console.log(id, "cheguei ao metodo");
    return this.httpClient
      .delete<IntervencaoCurativa>(
        BACKEND_URL + "/IntervencaoCurativas/" + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetEquipamentosObser(): Observable<Equipamento[]> {
    return this.httpClient
      .get<Equipamento[]>(BACKEND_URL + "/Equipamentoes", this.httpOptions)
      .pipe(retry(1));
  }
  // GET
  GetEstadosIntervencao(): Observable<EstadoIntervencao[]> {
    return this.httpClient
      .get<EstadoIntervencao[]>(
        BACKEND_URL + "/EstadoIntervencaos",
        this.httpOptions
      )
      .pipe(retry(1));
  }

  //GET grupos de máquinas
  GetGruposMaquina(): Observable<GrupoMaquina[]> {
    return this.httpClient
      .get<GrupoMaquina[]>(BACKEND_URL + "/GrupoMaquinas", this.httpOptions)
      .pipe(retry(1));
  }
}
