import { PedidoPreventivo } from "./pedidoMpreventiva.model";
import { Injectable } from "@angular/core";
import { Subject, Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { retry, catchError, map } from "rxjs/operators";
import { Equipamento } from "../equipamento/equipamentomodel";
import { EstadoIntervencao } from "../estadoIntervencao/estadoIntervencao.model";
import { GrupoMaquina } from "../gruposmaquina/grupomaquinamodel";
import { IntervencaoPreventivo } from "./intervencaoPreventiva.model";
import { AspNetUsers } from './aspNetUsers.model'

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

  intervencoes: IntervencaoPreventivo[] = [];
  usersList: AspNetUsers[] = [];
  private intervencoesUpdated = new Subject<IntervencaoPreventivo[]>();


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
 


/*   getAspNetUsers() {
    this.httpClient
      .get<any[]>(BACKEND_URL + "/AspNetUsers", this.httpOptions)
      .subscribe((usersList) => {
        let transformedUsers: AspNetUsers[] = [];
        for (let x = 0; x < usersList.length; x++) {
          let transformedUser: AspNetUsers = {
            UserName: usersList[x].UserName,
            IDTipo: usersList[x].IDTipo,
            NumeroUtilizador: usersList[x].NumeroUtilizador,
            Nome: usersList[x].Nome
          };
          transformedUsers.push(transformedUser);
        }
        this.usersList = transformedUsers;
        //this.UsersUpdated.next([...this.usersList]);
      });
  } */
  

  getPedidoUpdateListener() {
    return this.pedidosUpdated.asObservable();
  }

    //POST PEDIDO
    postPedido(data) {
      this.httpClient
        .post<any>(
          BACKEND_URL + "/PedidosPreventivas",
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

  getIntervencoes() {
    this.httpClient
      .get<any[]>(BACKEND_URL + "/IntervencaoPreventivas", this.httpOptions)
      .subscribe((intervencoes) => {
        let transformedintervencoes: IntervencaoPreventivo[] = [];
        for (let x = 0; x < intervencoes.length; x++) {
          let transformedIntervencao: IntervencaoPreventivo = {
            ID: intervencoes[x].ID,
            PedidoManutPreventivaID: intervencoes[x].PedidoManutPreventivaID,
            UtilizadorIDUser: intervencoes[x].UtilizadorIDUser,
            Observacoes: intervencoes[x].Observacoes,
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

  postIntervencao(data) {
    this.httpClient
      .post<any>(
        BACKEND_URL + "/IntervencaoPreventivas",
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

  // GET
  GetEquipamentosObser(): Observable<Equipamento[]> {
    return this.httpClient
      .get<Equipamento[]>(BACKEND_URL + "/Equipamentoes", this.httpOptions)
      .pipe(retry(1));
  }

  // GET
  GetAspNetUsers(): Observable<AspNetUsers> {
    return this.httpClient
      .get<AspNetUsers>(BACKEND_URL + "/AspNetUsers", this.httpOptions)
      .pipe(retry(1), catchError(this.errorHandl));
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

  // DELETE
  DeleteIntervencao(id) {
    return this.httpClient
      .delete<IntervencaoPreventivo>(
        BACKEND_URL + "/IntervencaoPreventivas/" + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }
}
