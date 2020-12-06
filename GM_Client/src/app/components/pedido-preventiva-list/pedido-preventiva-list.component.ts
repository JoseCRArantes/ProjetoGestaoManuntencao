import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { DatePipe } from "@angular/common";

import { NgForm } from "@angular/forms";
import * as printJS from "print-js";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";

import { MatSnackBar } from "@angular/material/snack-bar";
//import { IntervencaoCurativaAddComponent } from "../intervencao-curativa-add/intervencao-curativa-add.component";

/*Load interfaces*/
import { Equipamento } from "../../shared/equipamento/equipamentomodel";
import { EstadoIntervencao } from "../../shared/estadoIntervencao/estadoIntervencao.model";
import { PedidoPreventivo } from "../../shared/pedidoMpreventiva/pedidoMpreventiva.model";
import { PedidoPreventivoPrint } from "../../shared/pedidoMpreventiva/pedidoMpreventivaPrint.model";
import { PedidosPreventivosService } from "../../shared/pedidoMpreventiva/pedidoMpreventiva.service";
import { IntervencaoPreventivo } from "src/app/shared/pedidoMpreventiva/intervencaoPreventiva.model";
import { IntervencaoPreventivaAddComponent } from "../intervencao-preventiva-add/intervencao-preventiva-add.component";
import { IntervencaoAddUserHomePageComponent } from "../intervencao-add-user-home-page/intervencao-add-user-home-page.component";
import { GrupoMaquina } from "../../shared/gruposmaquina/grupomaquinamodel";
import { AspNetUsers } from "../../shared/pedidoMpreventiva/aspNetUsers.model";
import { TipoUtilizadorService } from "../../shared/tipoUtilizador/tipoUtilizador.service";
import { TipoUtilizador } from "../../shared/tipoUtilizador/tipoUtilizador.model";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute } from "@angular/router";
import { PedidosService } from "src/app/shared/pedidoMcurativa-teste/pedidoMcurativa.service";


@Component({
  selector: "app-pedido-preventiva-list",
  templateUrl: "./pedido-preventiva-list.component.html",
  styleUrls: ["./pedido-preventiva-list.component.css"],
  providers: [DatePipe]
})
export class PedidoPreventivaListComponent implements OnInit, OnDestroy {

  myDate01 = new Date();
  myDate = this.datePipe.transform(this.myDate01, "yyyy-MM-dd").toString();

  constructor(
    public pedidosService: PedidosPreventivosService,
    public tipoUtilizadorService: TipoUtilizadorService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  isLoading = false;
  pedidos: PedidoPreventivo[] = [];
  equipamentosList: Equipamento[] = [];
  estadoIntervencaoList: EstadoIntervencao[] = [];
  intervencoesFiltradas: IntervencaoPreventivo[] = [];
  intervencoes: IntervencaoPreventivo[] = [];
  gruposMaquinaList: GrupoMaquina[] = [];
  equipamentosFiltrados: Equipamento[] = [];
  aspNetUsersList: any = [];
  tipoUtilizadorList: any = [];
  gmID: number;
  pedidosImprimir: PedidoPreventivoPrint[] = [];
  notValid: any;
  intervencoesOpenModal: IntervencaoPreventivo[] = [];


  private pedidosSub: Subscription;
  private intervencoesSub: Subscription;

  pageSizeOptions = [8, 12, 20];
  totalPedidos = 0;
  pedidosPerPage = 4;
  currentPage = 1;
  selectedOptionGrupo = 0;
  selectedOptionEquipamento = 0;
  selectedOptionDateInicio = "2020-01-01";
  selectedOptionDateFim = this.myDate;
  model: any = {};

  ngOnInit() {
    this.isLoading = true;
    this.pedidosService.getPedidos(
      this.pedidosPerPage,
      this.currentPage,
      0,
      "2020-01-01",
      this.myDate,
      0
    );
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
    this.loadGrupoMaquinas();
    //this.loadAspNetUsers();
    this.loadTiposUtilizador();
  }

  limparFiltros() {
    this.ngOnInit();
    this.selectedOptionGrupo = 0;
    this.selectedOptionEquipamento = 0;
    this.selectedOptionDateInicio = "2020-01-01";
    this.selectedOptionDateFim = this.myDate;
  }

  printPedidos() {
    type MyArrayType = Array<{
      UtilizadorIDUser: string;
      DataLimiteManutencaoPrev: string;
    }>;

    let myArray = [];

    for (let i = 0; i < this.pedidos.length; i++) {
      let pedidoPrint = {} as PedidoPreventivoPrint;
      const datepipe: DatePipe = new DatePipe("en-US");

      let dataLimiteFormatada = datepipe.transform(
        this.pedidos[i].DataLimiteManutencaoPrev,
        "dd-MM-yyyy"
      );

      let dataPedidoFormatada = datepipe.transform(
        this.pedidos[i].DataPedido,
        "dd-MM-yyyy HH:mm"
      );

      pedidoPrint.DataPedido = "";
      pedidoPrint.DataLimiteManutencaoPrev = "";
      pedidoPrint.Descricao = "";
      pedidoPrint.UtilizadorIDUser = "";
      pedidoPrint.IDEquipamento = "";

      pedidoPrint.DataPedido = dataPedidoFormatada;
      if (dataLimiteFormatada == null) {
        dataLimiteFormatada = "";
      }
      if (dataLimiteFormatada != null) {
        pedidoPrint.DataLimiteManutencaoPrev = dataLimiteFormatada;
      }

      pedidoPrint.Descricao = this.pedidos[i].Descricao;
      pedidoPrint.UtilizadorIDUser = this.pedidos[i].UtilizadorIDUser;
      for (let j = 0; j < this.equipamentosList.length; j++) {
        if (
          this.pedidos[i].IDEquipamento ==
          this.equipamentosList[j].IDEquipamento
        ) {
          pedidoPrint.IDEquipamento =
            this.equipamentosList[j].CodigoInterno +
            " - " +
            this.equipamentosList[j].Marca +
            ": " +
            this.equipamentosList[j].Descr;
        }
      }

      myArray.push(pedidoPrint);

      console.log(myArray);
    }

    printJS({
      printable: myArray,
      properties: [
        { field: "UtilizadorIDUser", displayName: "Utilizador" },
        { field: "IDEquipamento", displayName: "Equipamento" },
        { field: "Descricao", displayName: "Descrição" },
        { field: "DataLimiteManutencaoPrev", displayName: "Data limite" },
        { field: "DataPedido", displayName: "Data pedido" },
      ],
      type: "json",
      header: "Gestão da manutenção - Pedidos preventivos",
    });
  }

  
  /* Selecionado o grupo, filtra os equipamentos desse grupo para um array,
  para mostrar depois na select box de Equipamentos */
  listJustgroupmachine() {
    if (this.equipamentosFiltrados.length > 0) {
      this.equipamentosFiltrados.length = 0;
    }

    for (let j = 0; j < this.equipamentosList.length; j++) {
      if (this.selectedOptionGrupo == this.equipamentosList[j].IDGrupoM) {
        this.equipamentosFiltrados.push(this.equipamentosList[j]);
      }
    }
  }

  procuraAvancada() {
    this.isLoading = true;
    this.pedidosService.getPedidos(
      this.pedidosPerPage,
      this.currentPage,
      this.selectedOptionGrupo,
      this.selectedOptionDateInicio,
      this.selectedOptionDateFim,
      this.selectedOptionEquipamento
    );
    this.pedidosSub = this.pedidosService
      .getPedidoUpdateListener()
      .subscribe(
        (pedidoData: { pedidos: PedidoPreventivo[]; CountPedidos: number }) => {
          this.isLoading = false;
          this.pedidos = pedidoData.pedidos;
          this.totalPedidos = pedidoData.CountPedidos;
        }
      );
  }

  //load tipos de utilizador da DB
  loadTiposUtilizador() {
    return this.tipoUtilizadorService
      .GetTiposUtilizador()
      .subscribe((data: {}) => {
        this.tipoUtilizadorList = data;
      });
  }

  ngOnDestroy() {
    this.pedidosSub.unsubscribe();
    this.intervencoesSub.unsubscribe();
  }
  //MAT paginator
  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pedidosPerPage = pageData.pageSize;
    this.pedidosService.getPedidos(
      this.pedidosPerPage,
      this.currentPage,
      this.selectedOptionGrupo,
      this.selectedOptionDateInicio,
      this.selectedOptionDateFim,
      this.selectedOptionEquipamento
    );
  }

  loadGrupoMaquinas() {
    return this.pedidosService
      .GetGruposMaquina()
      .subscribe((data: GrupoMaquina[]) => {
        this.gruposMaquinaList = data;
      });
  }

  openDialog(idPedido) {
    this.notValid= true;
    if (this.intervencoesOpenModal.length > 0) 
    {
      this.intervencoesOpenModal.length = 0;
    }

    for (let j = 0; j < this.intervencoes.length; j++) {
      if (
        this.intervencoes[j].PedidoManutPreventivaID == idPedido
      ) {
        this.intervencoesOpenModal.push(this.intervencoes[j]);
      }
    }
    if(this.intervencoesOpenModal.length>0)
    {
      for(let j = 0; j< this.intervencoesOpenModal.length;j++)
      {
        if(this.intervencoesOpenModal[j].IDEstadoIntervencao == 3)
        {
          this.notValid = true;
        }
        if(this.intervencoesOpenModal[j].IDEstadoIntervencao !=3)
        {
          this.notValid = false;
        }
      }
    }
    if(this.intervencoesOpenModal.length==0)
    {
      this.notValid = false;
    }

 

    if (this.notValid == false) {
      this.dialog.open(IntervencaoPreventivaAddComponent, {
        data: { idPedido: idPedido },
      });
    }
    if (this.notValid == true) {
      this.openSnackBar(
        "Sem acesso. \n Este pedido foi anteriormente fechado.",
        ""
      );
    }
  }

  //Snack Bar - para mostrar erros ou validações.
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3500,
      verticalPosition: "top",
      horizontalPosition: "right",
    });
  }

  //## MÉTODOS ## //
  //Delete intervenção, somente se o User registado na intervencao, for o mesmo da sessão em aberto
  deleteIntervencao(ID) {
    return this.pedidosService.DeleteIntervencao(ID).subscribe((res) => { });
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
          ": " +
          this.equipamentosList[j].Descr
        );
      }
    }
  }

  //Mostra os estados de intervenção ## 
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
      var maxI = this.intervencoesFiltradas.reduce(function (prev, current) {
        return prev.PedidoManutPreventivaID > current.PedidoManutPreventivaID
          ? prev
          : current;
      });
    }
    if (this.intervencoesFiltradas.length == 0) return "S/I";
    else if (maxI.IDEstadoIntervencao == 2) return "Aguarda";
    else if (maxI.IDEstadoIntervencao == 3) return "Fechado";
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
