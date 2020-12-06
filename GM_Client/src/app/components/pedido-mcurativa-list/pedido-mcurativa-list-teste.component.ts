import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { PedidoManutCurativaTeste } from "../../shared/pedidoMcurativa-teste/pedidoMcurativa.model";
import { PedidosService } from "../../shared/pedidoMcurativa-teste/pedidoMcurativa.service";
import { NgForm } from "@angular/forms";
import * as printJS from "print-js";
import { Equipamento } from "../../shared/equipamento/equipamentomodel";
import { EstadoIntervencao } from "../../shared/estadoIntervencao/estadoIntervencao.model";
import { IntervencaoCurativa } from "../../shared/pedidoMcurativa-teste/intervencaoCurativa.model";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";
import { IntervencaoCurativaAddComponent } from "../intervencao-curativa-add/intervencao-curativa-add.component";
import { GrupoMaquina } from "../../shared/gruposmaquina/grupomaquinamodel";
import { ActivatedRoute } from "@angular/router";
import { PedidoManutCurativaPrint } from "../../shared/pedidoMcurativa-teste/pedidoMCurativaPrint.model";
import { IntervencaoCurativaPrint } from "../../shared/pedidoMcurativa-teste/intervencaoMcurativaPrint.model";
import { DatePipe } from "@angular/common";

import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-pedido-mcurativa-list-teste",
  templateUrl: "./pedido-mcurativa-list-teste.component.html",
  styleUrls: ["./pedido-mcurativa-list-teste.component.css"],
  providers: [DatePipe],
})
export class PedidoMcurativaListTesteComponent implements OnInit, OnDestroy {
  
  myDate01 = new Date();
  myDate = this.datePipe.transform(this.myDate01, "yyyy-MM-dd").toString();

  constructor(
    public pedidosService: PedidosService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private datePipe: DatePipe
  ) {}

  private pedidosSub: Subscription;
  private intervencoesSub: Subscription;

  currentDate: Date;
  isLoading = false;
  notValid: any;
  pedidos: PedidoManutCurativaTeste[] = [];
  intervencoes: IntervencaoCurativa[] = [];
  equipamentosList: Equipamento[] = [];
  estadoIntervencaoList: EstadoIntervencao[] = [];
  intervencoesFiltradas: IntervencaoCurativa[] = [];
  intervencoesOpenModal: IntervencaoCurativa[] = [];
  gruposMaquinaList: GrupoMaquina[] = [];
  equipamentosFiltrados: Equipamento[] = [];

  pageSizeOptions = [8, 12, 20];
  totalPedidos = 0;
  pedidosPerPage = 4;
  currentPage = 1;
  selectedOptionGrupo = 0;
  selectedOptionEquipamento = 0;
  selectedOptionDateInicio = "2020-01-01";
  selectedOptionDateFim = this.myDate;

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
        (pedidoData: {
          pedidos: PedidoManutCurativaTeste[];
          CountPedidos: number;
        }) => {
          this.isLoading = false;
          this.pedidos = pedidoData.pedidos;
          this.totalPedidos = pedidoData.CountPedidos;
        }
      );

    this.pedidosService.getIntervencoes();
    this.intervencoesSub = this.pedidosService
      .getIntervencaoUpdateListener()
      .subscribe((intervencoes: IntervencaoCurativa[]) => {
        this.intervencoes = intervencoes;
      });

    //Carregamento de outros métodos.
    this.loadEstadosIntervencao();
    this.loadEquip();
    this.loadGrupoMaquinas();
  }

  printPedidos() {

    let myArray = [];

    for (let i = 0; i < this.pedidos.length; i++) {
      let pedidoPrint = {} as PedidoManutCurativaPrint;
      const datepipe: DatePipe = new DatePipe("en-US");

      let dataPedidoFormatada = datepipe.transform(
        this.pedidos[i].DataPedido,
        "dd-MM-yyyy HH:mm"
      );

      pedidoPrint.DataPedido = "";
      pedidoPrint.Descricao = "";
      pedidoPrint.UtilizadorIDUser = "";
      pedidoPrint.IDEquipamento = "";
      pedidoPrint.DataPedido = dataPedidoFormatada;
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
    }
    printJS({
      printable: myArray,
      properties: [
        { field: "UtilizadorIDUser", displayName: "Utilizador" },
        { field: "IDEquipamento", displayName: "Equipamento" },
        { field: "Descricao", displayName: "Descrição" },
        { field: "DataPedido", displayName: "Data pedido" },
      ],
      type: "json",
      header: "Gestão da manutenção - Pedidos curativos",
      headerStyle: 'direction:center; font-size: 24px; font-weight: normal',
      gridHeaderStyle: 'color: red;  border: 1.5px solid #3971A5;',
      gridStyle: 'border: 1.5px solid #3971A5;',  
    });
  }

  /*   //Método para imprimir as intervenções realizadas.
  printPedidos() {
    let myArray = [];

    for (let i = 0; i < this.intervencoes.length; i++) {
      let intervencaoPrint = {} as IntervencaoCurativaPrint;
      const datepipe: DatePipe = new DatePipe("en-US");

      let dataPedidoInicioFormatada = datepipe.transform(
        this.intervencoes[i].DataInicioIntervencao,
        "dd-MM-yyyy HH:mm"
      );
      let dataPedidoFimFormatada = datepipe.transform(
        this.intervencoes[i].DataFimIntervencao,
        "dd-MM-yyyy HH:mm"
      );

      intervencaoPrint.DataFimIntervencao = "";
      intervencaoPrint.DataInicioIntervencao = "";
      intervencaoPrint.Descricao = "";
      intervencaoPrint.UtilizadorIDUser = "";
      intervencaoPrint.Equipamento = "";
      intervencaoPrint.IDEstadoIntervencao = "";

      intervencaoPrint.DataInicioIntervencao = dataPedidoInicioFormatada; //DataInicioIntervencao
      intervencaoPrint.DataFimIntervencao = dataPedidoFimFormatada; //DataFimIntervenção
      intervencaoPrint.Descricao = this.intervencoes[i].Descricao; //Descrição
      intervencaoPrint.UtilizadorIDUser = this.intervencoes[i].UtilizadorIDUser; //UtilizadorIDUser

      //#region Calcula duração de cada intervenção
      let endDate = new Date();
      endDate = new Date(this.intervencoes[i].DataFimIntervencao);
      let beginDate = new Date();
      beginDate = new Date(this.intervencoes[i].DataInicioIntervencao);
      let diffMs = endDate.getTime() - beginDate.getTime(); // milisegundos
      var diffMinutos = Math.round(diffMs / 60000);
      var hours = diffMinutos / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      if (rhours == 0) {
        intervencaoPrint.Duracao = rminutes + " minuto(s)";
      }
      if (rhours >= 1 && rminutes == 0) intervencaoPrint.Duracao = rhours + "hora(s)";
      if (rhours >= 1 && rminutes > 0)
        intervencaoPrint.Duracao = rhours + "hora(s):" + rminutes + "minuto(s)";
      //#endregion

      for(let x = 0; x<this.pedidos.length;x++)
      {
        if( this.pedidos[x].IDPedido == this.intervencoes[i].IDPedido)
        {
          for (let j = 0; j < this.equipamentosList.length; j++) {
            if ( this.pedidos[x].IDEquipamento == this.equipamentosList[j].IDEquipamento) 
            {
              intervencaoPrint.Equipamento =
                this.equipamentosList[j].CodigoInterno +
                " - " +
                this.equipamentosList[j].Marca +
                ": " +
                this.equipamentosList[j].Descr;
            }
          } 
        }
      }
      myArray.push(intervencaoPrint);
    }

    printJS({
      printable: myArray,
      properties: [
        { field: "UtilizadorIDUser", displayName: "Utilizador" },
        { field: "Equipamento", displayName: "Equipamento" },
        { field: "Descricao", displayName: "Descricao" },
        { field: "DataInicioIntervencao", displayName: "Data de início" },
        { field: "DataFimIntervencao", displayName: "Data de fim" },
        { field: "Duracao", displayName: "Duracao" },
      ],
      type: "json",
      header: "this.selectedOptionDateFim - Pedidos curativos",
    });
  } */

  //Limpeza dos filtro de pesquisa avançada para valores default.
  limparFiltros() {
    this.ngOnInit();
    this.selectedOptionGrupo = 0;
    this.selectedOptionEquipamento = 0;
    this.selectedOptionDateInicio = "2020-01-01";
    this.selectedOptionDateFim = this.myDate;
  }

  //Button: método de procura avançada por filtros, através de NgModel.
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
        (pedidoData: {
          pedidos: PedidoManutCurativaTeste[];
          CountPedidos: number;
        }) => {
          this.isLoading = false;
          this.pedidos = pedidoData.pedidos;
          this.totalPedidos = pedidoData.CountPedidos;
        }
      );
  }

  //Método criado para calcular a duração de cada intervenção. (front-end)
  getTimeDiff(a: number) {
    for (let j = 0; j < this.intervencoes.length; j++) {
      if (this.intervencoes[j].ID == a) {
        let endDate = new Date();
        endDate = new Date(this.intervencoes[j].DataFimIntervencao);
        let beginDate = new Date();
        beginDate = new Date(this.intervencoes[j].DataInicioIntervencao);
        let diffMs = endDate.getTime() - beginDate.getTime(); // milisegundos
        var diffMinutos = Math.round(diffMs / 60000);
        var hours = diffMinutos / 60;
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
      }
    }
    if (rhours == 0) {
      return rminutes + " minuto(s)";
    }
    if (rhours >= 1 && rminutes == 0) return rhours + "h";
    if (rhours >= 1 && rminutes > 0) return rhours + " h:" + rminutes + "m";
  }

  ngOnDestroy() {
    this.pedidosSub.unsubscribe();
    this.intervencoesSub.unsubscribe();
  }

  //Método usado para a paginação, consoante também os filtros de pesquisa.
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

  /*  Verifica se o pedido já foi fechado antes de abrir o Modal MatDialog.
  Se foi fechado, o MatSnackBar é invocado, relatando o erro. */
  openDialog(idPedido) {
    this.notValid = true;
    if (this.intervencoesOpenModal.length > 0) {
      this.intervencoesOpenModal.length = 0;
    }

    for (let j = 0; j < this.intervencoes.length; j++) {
      if (this.intervencoes[j].IDPedido == idPedido) {
        //adiciona a intervenção para um array.
        this.intervencoesOpenModal.push(this.intervencoes[j]);
      }
    }
    if (this.intervencoesOpenModal.length > 0) {
      for (let j = 0; j < this.intervencoesOpenModal.length; j++) {
        if (this.intervencoesOpenModal[j].IDEstadoIntervencao == 3) {
          this.notValid = true;
          //Estado de intervenção com id 3, atribuido a intervenções com o estado 'fechado'.
        }
        if (this.intervencoesOpenModal[j].IDEstadoIntervencao != 3) {
          this.notValid = false;
        }
      }
    }
    if (this.intervencoesOpenModal.length == 0) {
      this.notValid = false;
    }

    if (this.notValid == false) {
      this.dialog.open(IntervencaoCurativaAddComponent, {
        data: { idPedido: idPedido },
      });
    }
    if (this.notValid == true) {
      this.openSnackBar(
        "Sem acesso. Este pedido foi anteriormente fechado.",
        ""
      );
    }
  }

  /* Snack Bar - para mostrar erros ou validações.
  Definições da janela SnackBar */
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3500,
      verticalPosition: "top",
      horizontalPosition: "right",
    });
  }

  //Validar melhor este método.
  deleteIntervencao(ID) {
    return this.pedidosService.DeleteIntervencao(ID).subscribe((res) => {});
  }

  //Método de carregamento dos grupos de máquina para a memória.
  loadGrupoMaquinas() {
    return this.pedidosService
      .GetGruposMaquina()
      .subscribe((data: GrupoMaquina[]) => {
        this.gruposMaquinaList = data;
        console.log(this.gruposMaquinaList);
      });
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

  //Mostra os estados de intervenção
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
      var maxI = this.intervencoesFiltradas.reduce(function (prev, current) {
        return prev.IDPedido > current.IDPedido ? prev : current;
      });
    }
    if (this.intervencoesFiltradas.length == 0) return "S/I";
    else if (maxI.IDEstadoIntervencao == 2) return "Aguardar";
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

  //Método de carregamento dos estados de intervenção para a memória.
  loadEstadosIntervencao() {
    return this.pedidosService
      .GetEstadosIntervencao()
      .subscribe((data: EstadoIntervencao[]) => {
        this.estadoIntervencaoList = data;
      });
  }

  //Método de carregamento dos equipamentos para a memória.
  loadEquip() {
    return this.pedidosService
      .GetEquipamentosObser()
      .subscribe((data: Equipamento[]) => {
        this.equipamentosList = data;
      });
  }
}
