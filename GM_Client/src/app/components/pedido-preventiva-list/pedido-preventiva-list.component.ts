import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";

import { NgForm } from "@angular/forms";

import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";
//import { IntervencaoCurativaAddComponent } from "../intervencao-curativa-add/intervencao-curativa-add.component";

/*Load interfaces*/
import { Equipamento } from "../../shared/equipamento/equipamentomodel";
import { EstadoIntervencao } from "../../shared/estadoIntervencao/estadoIntervencao.model";
import { PedidoPreventivo } from "../../shared/pedidoMpreventiva/pedidoMpreventiva.model";
import { PedidosPreventivosService } from "../../shared/pedidoMpreventiva/pedidoMpreventiva.service";


@Component({
  selector: "app-pedido-preventiva-list",
  templateUrl: "./pedido-preventiva-list.component.html",
  styleUrls: ["./pedido-preventiva-list.component.css"],
})
export class PedidoPreventivaListComponent implements OnInit, OnDestroy {
  constructor(public pedidosService: PedidosPreventivosService, public dialog: MatDialog) {}

  isLoading = false;
  pedidos: PedidoPreventivo[] = [];
  equipamentosList: Equipamento[] = [];
  estadoIntervencaoList: EstadoIntervencao[] = [];
 // intervencoesFiltradas: IntervencaoCurativa[] = [];

  private pedidosSub: Subscription;

  // intervencoes: IntervencaoCurativa[] = [];
  // intervencoesFiltradas: IntervencaoCurativa[] = [];

  pageSizeOptions = [5, 8, 12];
  totalPedidos = 0;
  pedidosPerPage = 2;
  currentPage = 1;

  ngOnInit(){
    this.isLoading = true;
    this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage);
    this.pedidosSub = this.pedidosService
      .getPedidoUpdateListener()
      .subscribe((pedidoData:{pedidos: PedidoPreventivo[], CountPedidos: number}) => {
        this.isLoading = false;
        this.pedidos = pedidoData.pedidos;
        this.totalPedidos = pedidoData.CountPedidos;
      });

    //Carregamento de outros métodos.
    this.loadEstadosIntervencao();
    this.loadEquip();
  }


  ngOnDestroy() {
    this.pedidosSub.unsubscribe();
    //this.intervencoesSub.unsubscribe();
  }
  //MAT paginator
  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pedidosPerPage = pageData.pageSize;
    this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage);
  }

  //## MÉTODOS ## //

  //Troca no front-end, o ID do equipamento pelo código interno da empresa
  changeIDtoInternalCode(equip: number) {
    for (let j = 0; j < this.equipamentosList.length; j++) {
      if (
        this.pedidos[equip].IDEquipamento ==
        this.equipamentosList[j].IDEquipamento
      ) {
        return (
          this.equipamentosList[j].CodigoInterno +
          " - " +
          this.equipamentosList[j].Marca +
          " " +
          this.equipamentosList[j].Descr
        );
      }
    }
  }

  /* //Mostra os estados de intervenção ## melhorar esta parte.
  checkStateOfIntervention(a: number) {
    if (this.intervencoesFiltradas.length > 0) {
      this.intervencoesFiltradas.length = 0;
    }

    for (let j = 0; j < this.intervencoes.length; j++) {
      if (this.pedidos[a].IDPedido == this.intervencoes[j].IDPedido) {
        this.intervencoesFiltradas.push(this.intervencoes[j]);
      }
    }

    if (this.intervencoesFiltradas.length > 0) {
      var max = this.intervencoesFiltradas[0].IDPedido;
      var maxIndex = 0;

      for (var i = 1; i < this.intervencoesFiltradas.length; i++) {
        if (this.intervencoesFiltradas[i].IDPedido > max) {
          maxIndex = i;
          max = this.intervencoesFiltradas[i].IDPedido;
        }
      }
    }

    if (this.intervencoesFiltradas.length == 0) return "S/I";
    else if (this.intervencoesFiltradas[maxIndex].IDEstadoIntervencao == 2)
      return "Aguarda";
    else if (this.intervencoesFiltradas[maxIndex].IDEstadoIntervencao == 3)
      return "Fechado";
  } */



   //lista estados de intervenção.
   loadEstadosIntervencao() {
    return this.pedidosService
      .GetEstadosIntervencao()
      .subscribe((data: EstadoIntervencao[]) => {
        this.estadoIntervencaoList = data;
      });
  }

  // lista equipamentos.
  loadEquip() {
    return this.pedidosService
      .GetEquipamentosObser()
      .subscribe((data: Equipamento[]) => {
        this.equipamentosList = data;
      });
  }
}
