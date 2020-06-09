import { PedidoPreventivo } from "./pedidoMpreventiva.model";
import { Injectable } from "@angular/core";
import { Subject, Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { retry, catchError, map } from "rxjs/operators";
import { Equipamento } from "../equipamento/equipamentomodel";
import { EstadoIntervencao } from "../estadoIntervencao/estadoIntervencao.model";
import { GrupoMaquina } from "../gruposmaquina/grupomaquinamodel";
//import { IntervencaoPreventiva } from "./intervencaoPreventiva.model";

import { environment } from "./../environments/environments";
const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class PedidosPreventivosService {
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    }),
    withCredentials: true,
  };

  constructor(private httpClient: HttpClient) {}

  pedidos: PedidoPreventivo[] = [];
  countPedidos: number;

  private pedidosUpdated = new Subject<{
    pedidos: PedidoPreventivo[];
    CountPedidos: number;
  }>();
  //intervencoes: IntervencaoCurativa[] = [];
  //private intervencoesUpdated = new Subject<IntervencaoCurativa[]>();

  //POST PEDIDO

  //####################NÂO ESQUECER TERMINAR A PARTE DO iD GRUPOmAQUINA NO URL
  //##########################

  ///////////////////////////////
  postPedidoPerGrupoMaquinas(idGrupoMaquina, data) {
    this.httpClient
      .post<any>(
        BACKEND_URL + "/PedidosPreventivas?grupoMaquina=" + idGrupoMaquina,
        JSON.stringify(data),
        this.httpOptions
      )
      .toPromise();
    this.pedidos.push(data);
    this.countPedidos = this.countPedidos + 1;
    this.pedidosUpdated.next({
      pedidos: [...this.pedidos],
      CountPedidos: this.countPedidos,
    });
  }

  getPedidoUpdateListener() {
    return this.pedidosUpdated.asObservable();
  }

  //Método GET Pedidos.
  getPedidos(pedidosPerPage: number, currentPage: number) {
    const queryParms = `?pedidosPerPage=${pedidosPerPage}&currentPage=${currentPage}`;
    this.httpClient
      .get<{
        PedidoManutPreventivoList: PedidoPreventivo[];
        CountPedidos: number;
      }>(BACKEND_URL + "/PedidosPreventivas" + queryParms, this.httpOptions)
      .pipe(
        map((pedidoPreventivoData) => {
          return {
            PedidoManutPreventivoList: pedidoPreventivoData.PedidoManutPreventivoList.map(
              (pedidoPreventivo) => {
                return {
                  IDPedido: pedidoPreventivo.IDPedido,
                  UtilizadorIDUser: pedidoPreventivo.UtilizadorIDUser,
                  IDEquipamento: pedidoPreventivo.IDEquipamento,
                  Descricao: pedidoPreventivo.Descricao,
                  DataPedido: pedidoPreventivo.DataPedido,
                  FichaManutencaoID: pedidoPreventivo.FichaManutencaoID,
                  DataLimiteManutencaoPrev:
                    pedidoPreventivo.DataLimiteManutencaoPrev,
                };
              }
            ),
            pedidoPreventivoCount: pedidoPreventivoData.CountPedidos,
          };
        })
      )
      .subscribe((pedidosPreventiva) => {
        this.countPedidos = pedidosPreventiva.pedidoPreventivoCount;
        console.log(
          "numero de pedidos",
          pedidosPreventiva.pedidoPreventivoCount
        );
        this.pedidos = pedidosPreventiva.PedidoManutPreventivoList;
        this.pedidosUpdated.next({
          pedidos: [...this.pedidos],
          CountPedidos: this.countPedidos,
        });
      });
  }

  /*
  getIntervencoes() {
    this.httpClient
      .get<any[]>(
        "http://localhost:44334/api/IntervencaoCurativas",
        this.httpOptions
      )
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
*/
  

  /*
  
  }*/

  /*
  postIntervencao(data) {
    this.httpClient
      .post<any>(
        "http://localhost:44334/api/IntervencaoCurativas",
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
  }*/
  /*
  getIntervencaoUpdateListener() {
    return this.intervencoesUpdated.asObservable();
  }*/

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
      .get<GrupoMaquina[]>(
        BACKEND_URL + "http://localhost:44334/api/GrupoMaquinas",
        this.httpOptions
      )
      .pipe(retry(1));
  }

  // DELETE
  /*DeleteIntervencao(id) {
    console.log(id, "cheguei ao metodo");
    return this.httpClient
      .delete<IntervencaoCurativa>(
        "http://localhost:44334/api/IntervencaoCurativas/" + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }*/
}
