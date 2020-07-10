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
import { IntervencaoPreventivo } from "src/app/shared/pedidoMpreventiva/intervencaoPreventiva.model";
import { IntervencaoPreventivaAddComponent } from "../intervencao-preventiva-add/intervencao-preventiva-add.component";

@Component({
  selector: "app-pedido-preventiva-list",
  templateUrl: "./pedido-preventiva-list.component.html",
  styleUrls: ["./pedido-preventiva-list.component.css"],
})
export class PedidoPreventivaListComponent implements OnInit, OnDestroy {
  constructor(
    public pedidosService: PedidosPreventivosService,
    public dialog: MatDialog
  ) {}

  isLoading = false;
  pedidos: PedidoPreventivo[] = [];
  equipamentosList: Equipamento[] = [];
  estadoIntervencaoList: EstadoIntervencao[] = [];
  intervencoesFiltradas: IntervencaoPreventivo[] = [];
  intervencoes: IntervencaoPreventivo[] = [];

  private pedidosSub: Subscription;
  private intervencoesSub: Subscription;

  pageSizeOptions = [5, 8, 12];
  totalPedidos = 0;
  pedidosPerPage = 2;
  currentPage = 1;

  ngOnInit() {
    this.isLoading = true;
    this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage);
    this.pedidosSub = this.pedidosService
      .getPedidoUpdateListener()
      .subscribe(
        (pedidoData: { pedidos: PedidoPreventivo[]; CountPedidos: number }) => {
          this.isLoading = false;
          this.pedidos = pedidoData.pedidos;
          this.totalPedidos = pedidoData.CountPedidos;
        }
      );

    this.pedidosService.getIntervencoes();
    this.intervencoesSub = this.pedidosService
      .getIntervencaoUpdateListener()
      .subscribe((intervencoes: IntervencaoPreventivo[]) => {
        this.intervencoes = intervencoes;
      });

    //Carregamento de outros métodos.
    this.loadEstadosIntervencao();
    this.loadEquip();
  }

  ngOnDestroy() {
    this.pedidosSub.unsubscribe();
    this.intervencoesSub.unsubscribe();
  }
  //MAT paginator
  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pedidosPerPage = pageData.pageSize;
    this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage);
  }

  openDialog(idPedido) {
    console.log(idPedido, "passou na componente");
    this.dialog.open(IntervencaoPreventivaAddComponent, {
      data: { idPedido: idPedido },
    });
  }

  //## MÉTODOS ## //
  //Delete intervenção, somente se o User registado na intervencao, for o mesmo da sessão em aberto
  deleteIntervencao(ID) {
    return this.pedidosService.DeleteIntervencao(ID).subscribe((res) => {});
  }

  getTimeDiff(a: number) {
    for (let j = 0; j < this.intervencoes.length; j++)
    {
      
      if (this.intervencoes[j].ID == a) 
      {
        let endDate = new Date();
        endDate = new Date(this.intervencoes[j].DataFimIntervencao);
        let beginDate = new Date();
        beginDate = new Date(this.intervencoes[j].DataInicioIntervencao);
        let diffMs = endDate.getTime() - beginDate.getTime(); // milliseconds
        var diffMinutos = Math.round(diffMs / 60000); 
        var hours = (diffMinutos/60);
        var rhours = Math.floor(hours);
        var minutes = (hours-rhours) * 60;
        var rminutes = Math.round(minutes);    
      }
    }
    if(rhours==0)
    {
      return rminutes + "minuto(s)";
    }
    if(rhours>=1 && rminutes==0)
      return rhours + "h";
    if(rhours>=1 && rminutes>0)
      return rhours + " h:" + rminutes + "m";




      
  }

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

  //Mostra os estados de intervenção ## melhorar esta parte.
  checkStateOfIntervention(a: number) {
    if (this.intervencoesFiltradas.length > 0) {
      this.intervencoesFiltradas.length = 0;
    }

    for (let j = 0; j < this.intervencoes.length; j++) {
      if (
        this.pedidos[a].IDPedido == this.intervencoes[j].PedidoManutPreventivaID
      ) {
        this.intervencoesFiltradas.push(this.intervencoes[j]);
      }
    }

    if (this.intervencoesFiltradas.length > 0) {
      var max = this.intervencoesFiltradas[0].PedidoManutPreventivaID;
      var maxIndex = 0;

      for (var i = 1; i < this.intervencoesFiltradas.length; i++) {
        if (this.intervencoesFiltradas[i].PedidoManutPreventivaID > max) {
          maxIndex = i;
          max = this.intervencoesFiltradas[i].PedidoManutPreventivaID;
        }
      }
    }

    if (this.intervencoesFiltradas.length == 0) return "S/I";
    else if (this.intervencoesFiltradas[maxIndex].IDEstadoIntervencao == 2)
      return "Aguarda";
    else if (this.intervencoesFiltradas[maxIndex].IDEstadoIntervencao == 3)
      return "Fechado";
  }

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

    //Troca o ID do estado de intervenção, pela sua descrição correspondente.
    changeIDtoDescription(estado: number) {
      for (let j = 0; j < this.equipamentosList.length; j++) {
        if (
          this.intervencoes[estado].IDEstadoIntervencao ==
          this.estadoIntervencaoList[j].ID
        ) {
          return this.estadoIntervencaoList[j].Descr;
        }
      }
    }
}
