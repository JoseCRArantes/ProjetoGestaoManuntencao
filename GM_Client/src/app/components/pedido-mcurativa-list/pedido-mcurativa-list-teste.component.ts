import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { PedidoManutCurativaTeste } from "../../shared/pedidoMcurativa-teste/pedidoMcurativa.model";
import { PedidosService } from "../../shared/pedidoMcurativa-teste/pedidoMcurativa.service";
import { NgForm } from "@angular/forms";
import { Equipamento } from "../../shared/equipamento/equipamentomodel";
import { EstadoIntervencao } from "../../shared/estadoIntervencao/estadoIntervencao.model";
import { IntervencaoCurativa } from "src/app/shared/pedidoMcurativa-teste/intervencaoCurativa.model";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";
import { IntervencaoCurativaAddComponent } from "../intervencao-curativa-add/intervencao-curativa-add.component";

@Component({
  selector: "app-pedido-mcurativa-list-teste",
  templateUrl: "./pedido-mcurativa-list-teste.component.html",
  styleUrls: ["./pedido-mcurativa-list-teste.component.css"],
})
export class PedidoMcurativaListTesteComponent implements OnInit, OnDestroy {
  isLoading = false;
  pedidos: PedidoManutCurativaTeste[] = [];
  equipamentosList: Equipamento[] = [];
  estadoIntervencaoList: EstadoIntervencao[] = [];
  intervencoes: IntervencaoCurativa[] = [];
  intervencoesFiltradas: IntervencaoCurativa[] = [];

  constructor(
    public pedidosService: PedidosService,
    public dialog: MatDialog
  ) {}

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
        (pedidoData: {
          pedidos: PedidoManutCurativaTeste[];
          CountPedidos: number;
        }) => {
          this.isLoading = false;
          this.pedidos = pedidoData.pedidos;
          this.totalPedidos = pedidoData.CountPedidos;
        }
      );
    /*  this.pedidosSub = this.pedidosService.getPedidoUpdateListener().subscribe((pedidos: {PedidoManutCurativaList: PedidoManutCurativaTeste[], CountPedidos: number}) => {
        this.isLoading = false;
        this.totalPedidos = pedidos.CountPedidos;
        this.pedidos = pedidos.PedidoManutCurativaList;
      }); */

    this.pedidosService.getIntervencoes();
    this.intervencoesSub = this.pedidosService
      .getIntervencaoUpdateListener()
      .subscribe((intervencoes: IntervencaoCurativa[]) => {
        this.intervencoes = intervencoes;
      });

    //Carregamento de outros métodos.
    this.loadEstadosIntervencao();
    this.loadEquip();
  }

  getTimeDiff(a: number) {
    for (let j = 0; j < this.intervencoes.length; j++) {
      if (this.intervencoes[j].ID == a) {
        let endDate = new Date();
        endDate = new Date(this.intervencoes[j].DataFimIntervencao);
        let beginDate = new Date();
        beginDate = new Date(this.intervencoes[j].DataInicioIntervencao);
        let diffMs = endDate.getTime() - beginDate.getTime(); // milliseconds
        var diffMinutos = Math.round(diffMs / 60000);
        var hours = diffMinutos / 60;
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
      }
    }
    if (rhours == 0) {
      return rminutes + "minuto(s)";
    }
    if (rhours >= 1 && rminutes == 0) return rhours + "h";
    if (rhours >= 1 && rminutes > 0) return rhours + " h:" + rminutes + "m";
  }

  ngOnDestroy() {
    this.pedidosSub.unsubscribe();
    this.intervencoesSub.unsubscribe();
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pedidosPerPage = pageData.pageSize;
    this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage);
  }

  openDialog(idPedido) {
    this.dialog.open(IntervencaoCurativaAddComponent, {
      data: { idPedido: idPedido },
    });
  }

  deleteIntervencao(ID) {
    return this.pedidosService.DeleteIntervencao(ID).subscribe((res) => {});
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
          this.equipamentosList[j].Marca // +
          //" " +
          //this.equipamentosList[j].Descr
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
      if (this.pedidos[a].IDPedido == this.intervencoes[j].IDPedido) {
        this.intervencoesFiltradas.push(this.intervencoes[j]);
      }
    }
/* 
    if (this.intervencoesFiltradas.length > 0) {
      var max = this.intervencoesFiltradas[0].IDPedido;
      var maxIndex = 0;S

      for (var i = 0; i < this.intervencoesFiltradas.length; i++) {
        if (this.intervencoesFiltradas[i].IDPedido > max) {
          maxIndex = i;
          max = this.intervencoesFiltradas[i].IDPedido;
        }
      }
    } */

    if (this.intervencoesFiltradas.length > 0) {
      var maxI = this.intervencoesFiltradas.reduce(function (prev, current) {
        return prev.IDPedido > current.IDPedido ? prev : current;
      });

      
      
    }
    if (this.intervencoesFiltradas.length == 0) return "S/I";
      else if (maxI.IDEstadoIntervencao == 2) return "Aguarda";
      else if (maxI.IDEstadoIntervencao == 3) return "Fechado";
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
