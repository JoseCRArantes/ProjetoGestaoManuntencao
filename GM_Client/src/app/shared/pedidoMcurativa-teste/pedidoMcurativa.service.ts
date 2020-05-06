import { PedidoManutCurativaTeste } from './pedidoMcurativa.model';
import { Injectable } from '@angular/core';
import { Subject, Observable, throwError} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { Equipamento } from '../equipamento/equipamentomodel';
import { EstadoIntervencao } from '../estadoIntervencao/estadoIntervencao.model';
import { GrupoMaquina } from '../gruposmaquina/grupomaquinamodel';



@Injectable({providedIn: 'root'})
export class PedidosService {

    pedidos: PedidoManutCurativaTeste[] = [];
    private pedidosUpdated = new Subject<PedidoManutCurativaTeste[]>();

    // Http Headers
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + localStorage.getItem('token') 
     }), 
     withCredentials: true
    }
    
    constructor(private httpClient: HttpClient){}

    getPedidos() {
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
  }


  getPedidoUpdateListener() 
  {
      return this.pedidosUpdated.asObservable();   
  }


  
    //POST PEDIDO 
    postPedido(data){
      this.httpClient.post<any>('http://localhost:44334/api/PedidoManutCurativas', JSON.stringify(data), this.httpOptions)
        .toPromise();
        this.pedidos.push(data);
        this.pedidosUpdated.next([...this.pedidos]);        
      }

  // GET
  GetEquipamentosObser(): Observable<Equipamento[]> {
    return this.httpClient.get<Equipamento[]>('http://localhost:44334/api/Equipamentoes', this.httpOptions)
    .pipe(
      retry(1)
    )
  }
    // GET
    GetEstadosIntervencao(): Observable<EstadoIntervencao[]> {
      return this.httpClient.get<EstadoIntervencao[]>('http://localhost:44334/api/EstadoIntervencaos', this.httpOptions)
      .pipe(
        retry(1)
      )
    }

    //GET grupos de máquinas
    GetGruposMaquina(): Observable<GrupoMaquina[]> {
      return this.httpClient.get<GrupoMaquina[]>('http://localhost:44334/api/GrupoMaquinas', this.httpOptions)
      .pipe(
        retry(1)
      )
      
    }

 

    



  }

  

