
import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import { PedidoManutCurativaTeste } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.model';
import { PedidosService } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.service';
import { NgForm } from '@angular/forms';
import { Equipamento } from '../../shared/equipamento/equipamentomodel';
import {EstadoIntervencao } from '../../shared/estadoIntervencao/estadoIntervencao.model';

@Component({
  selector: 'app-pedido-mcurativa-list-teste',
  templateUrl: './pedido-mcurativa-list-teste.component.html',
  styleUrls: ['./pedido-mcurativa-list-teste.component.css']
})
export class PedidoMcurativaListTesteComponent implements OnInit, OnDestroy {

  pedidos: PedidoManutCurativaTeste[] = [];
  equipamentosList: Equipamento[] = [];
  estadoIntervencaoList: EstadoIntervencao[] = [];

  constructor(public pedidosService: PedidosService){
  }
  private pedidosSub: Subscription;
  

  ngOnInit(){
    
    this.pedidosService.getPedidos();
    this.pedidosSub = this.pedidosService.getPedidoUpdateListener().subscribe((pedidos: PedidoManutCurativaTeste[]) => {
    this.pedidos = pedidos;
    });
    this.loadEquip();
    this.loadEstadosIntervencao(); 
    }

    ngOnDestroy(){
      this.pedidosSub.unsubscribe();
      }

    //Troca no front-end, o ID do equipamento pelo código interno da empresa
    changeIDtoInternalCode(equip : number)
    {
        for (let j = 0; j < this.equipamentosList.length; j++) {
          if (this.pedidos[equip].IDEquipamento == this.equipamentosList[j].IDEquipamento) {
             return this.equipamentosList[j].CodigoInterno;        
          }
        }   
    }

    //Troca o ID do estado de intervenção, pela sua descrição correspondente.
     changeIDtoDescription(estado : number)
    {
        for (let j = 0; j < this.equipamentosList.length; j++) {
          if (this.pedidos[estado].IDEstadoIntervencao == this.estadoIntervencaoList[j].ID) {
             return this.estadoIntervencaoList[j].Descr;        
          }
        }   
    } 
    
    loadEstadosIntervencao()
    {
      return this.pedidosService.GetEstadosIntervencao().subscribe((data: EstadoIntervencao[]) => {
        this.estadoIntervencaoList = data;
        console.log(this.estadoIntervencaoList);
      })
        
      
    }

   // lista equipamentos 
   loadEquip() {
    return this.pedidosService.GetEquipamentosObser().subscribe((data: Equipamento[]) => {
      this.equipamentosList = data;
      console.log(this.equipamentosList);
    })
  }

    

}
