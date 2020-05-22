import { PedidoManutCurativaTeste } from "./pedidoMcurativa.model";
import { Injectable } from "@angular/core";
import { Subject, Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { retry, catchError, map } from "rxjs/operators";
import { Equipamento } from "../equipamento/equipamentomodel";
import { EstadoIntervencao } from "../estadoIntervencao/estadoIntervencao.model";
import { GrupoMaquina } from "../gruposmaquina/grupomaquinamodel";
import { IntervencaoCurativa } from "./intervencaoCurativa.model";

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
  //private pedidosUpdated = new Subject<PedidoManutCurativaTeste[]>();

  private pedidosUpdated = new Subject<{pedidos: PedidoManutCurativaTeste[], CountPedidos: number}>();
  countPedidos: number;
  intervencoes: IntervencaoCurativa[] = [];
  private intervencoesUpdated = new Subject<IntervencaoCurativa[]>();

  constructor(private httpClient: HttpClient) {}

  getPedidos(pedidosPerPage:number, currentPage:number) {
    const queryParms = `?pedidosPerPage=${pedidosPerPage}&currentPage=${currentPage}`;
    this.httpClient
      .get<{PedidoManutCurativaList : PedidoManutCurativaTeste[], CountPedidos: number}>(
        "http://localhost:44334/api/PedidoManutCurativas" + queryParms,
        this.httpOptions
      )
      .pipe(
        map(pedidoCurativaData =>{
          return {
            PedidoManutCurativaList: pedidoCurativaData.PedidoManutCurativaList.map(pedidoCurativo => {
                return {
                  IDPedido: pedidoCurativo.IDPedido,
                  UtilizadorIDUser: pedidoCurativo.UtilizadorIDUser,
                  IDEquipamento: pedidoCurativo.IDEquipamento,
                  Descricao: pedidoCurativo.Descricao,
                  DataPedido: pedidoCurativo.DataPedido,
                };
            }),
            pedidoCurativoCount: pedidoCurativaData.CountPedidos
          };
        })
      )
      .subscribe((pedidosCurativa) => {
       /*  let transformedpedidos: PedidoManutCurativaTeste[] = [];
        console.log(pedidos);
        for (let x = 0; x < pedidos.PedidoManutCurativaList.length; x++) {
          let transformedpedido: PedidoManutCurativaTeste = {
            IDPedido: pedidos.PedidoManutCurativaList[x].IDPedido,
            UtilizadorIDUser: pedidos.PedidoManutCurativaList[x].UtilizadorIDUser,
            IDEquipamento: pedidos.PedidoManutCurativaList[x].IDEquipamento,
            Descricao: pedidos.PedidoManutCurativaList[x].Descricao,
            DataPedido: pedidos.PedidoManutCurativaList[x].DataPedido,
          };
          transformedpedidos.push(transformedpedido);
        } */
        this.countPedidos = pedidosCurativa.pedidoCurativoCount;
        console.log("numero de pedidos", pedidosCurativa.pedidoCurativoCount);
        this.pedidos = pedidosCurativa.PedidoManutCurativaList;
        this.pedidosUpdated.next({pedidos:[...this.pedidos], CountPedidos:this.countPedidos});
      });
  }

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

  getPedidoUpdateListener() {
    return this.pedidosUpdated.asObservable();
  }

  //POST PEDIDO
  postPedido(data) {
    this.httpClient
      .post<any>(
        "http://localhost:44334/api/PedidoManutCurativas",
        JSON.stringify(data),
        this.httpOptions
      )
      .toPromise();
    this.pedidos.push(data);
    this.countPedidos = this.countPedidos + 1;
     this.pedidosUpdated.next({pedidos:[...this.pedidos], CountPedidos:this.countPedidos});
  }

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
        "http://localhost:44334/api/IntervencaoCurativas/" + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  GetEquipamentosObser(): Observable<Equipamento[]> {
    return this.httpClient
      .get<Equipamento[]>(
        "http://localhost:44334/api/Equipamentoes",
        this.httpOptions
      )
      .pipe(retry(1));
  }
  // GET
  GetEstadosIntervencao(): Observable<EstadoIntervencao[]> {
    return this.httpClient
      .get<EstadoIntervencao[]>(
        "http://localhost:44334/api/EstadoIntervencaos",
        this.httpOptions
      )
      .pipe(retry(1));
  }

  //GET grupos de máquinas
  GetGruposMaquina(): Observable<GrupoMaquina[]> {
    return this.httpClient
      .get<GrupoMaquina[]>(
        "http://localhost:44334/api/GrupoMaquinas",
        this.httpOptions
      )
      .pipe(retry(1));
  }
}

/* LAST GETPEDIDOS
  getPedidos() {
    this.httpClient
      .get<any[]>(
        "http://localhost:44334/api/PedidoManutCurativas",
        this.httpOptions
      )
      .subscribe((pedidos) => {
        let transformedpedidos: PedidoManutCurativaTeste[] = [];
        for (let x = 0; x < pedidos.length; x++) {
          let transformedpedido: PedidoManutCurativaTeste = {
            IDPedido: pedidos[x].IDPedido,
            UtilizadorIDUser: pedidos[x].UtilizadorIDUser,
            IDEquipamento: pedidos[x].IDEquipamento,
            Descricao: pedidos[x].Descricao,
            DataPedido: pedidos[x].DataPedido,
          };
          transformedpedidos.push(transformedpedido);
        }

        this.pedidos = transformedpedidos;
        this.pedidosUpdated.next([...this.pedidos]);
      });
  }*/

/*  getPedidos() {
      this.httpClient.get<any>('http://localhost:44334/api/PedidoManutCurativas', this.httpOptions)
        .toPromise()
        .then(r => r.map(pedido => ({
          PedidoIDPedido : pedido.IDPedido,
          UtilizadorIDUser : pedido.UtilizadorIDUser,
          IDEquipamento : pedido.IDEquipamento,
          Descricao : pedido.Descricao,
          DataPedido : pedido.DataPedido 
        }))
        )
          .then(transformedpedidos => {
          this.pedidos = transformedpedidos;
          this.pedidosUpdated.next([...this.pedidos]);
        });
        
  } */

/*  getIntervencoes() {
        this.httpClient.get<any>('http://localhost:44334/api/IntervencaoCurativas', this.httpOptions)
          .toPromise()
          .then(r => r.map(intervencao => ({
            ID : intervencao.ID,
            IDPedido : intervencao.IDPedido,
            UtilizadorIDUser : intervencao.UtilizadorIDUser,
            IDEquipamento : intervencao.IDEquipamento,
            Descricao : intervencao.Descricao,
            IDEstadoIntervencao : intervencao.IDEstadoIntervencao,
            DataFimIntervencao: intervencao.DataFimIntervencao,
            DataInicioIntervencao : intervencao.DataInicioIntervencao
          }))
          )
            .then(transformedintervencoes=> {
            this.intervencoes = transformedintervencoes;
            this.intervencoesUpdated.next([...this.intervencoes]);
          });
          console.log(this.intervencoes, 'teste');
    } */
