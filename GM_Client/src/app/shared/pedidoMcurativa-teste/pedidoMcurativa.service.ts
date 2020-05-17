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
  private pedidosUpdated = new Subject<PedidoManutCurativaTeste[]>();
  intervencoes: IntervencaoCurativa[] = [];
  private intervencoesUpdated = new Subject<IntervencaoCurativa[]>();

  constructor(private httpClient: HttpClient) {}

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
    this.pedidosUpdated.next([...this.pedidos]);
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
