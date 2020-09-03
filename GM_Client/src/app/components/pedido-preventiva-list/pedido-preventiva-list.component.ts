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
import {IntervencaoAddUserHomePageComponent} from '../intervencao-add-user-home-page/intervencao-add-user-home-page.component';
import { GrupoMaquina } from '../../shared/gruposmaquina/grupomaquinamodel';
import { AspNetUsers } from '../../shared/pedidoMpreventiva/aspNetUsers.model';
import {TipoUtilizadorService} from '../../shared/tipoUtilizador/tipoUtilizador.service';
import { TipoUtilizador} from '../../shared/tipoUtilizador/tipoUtilizador.model';
import {MatIconModule} from '@angular/material/icon'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-pedido-preventiva-list",
  templateUrl: "./pedido-preventiva-list.component.html",
  styleUrls: ["./pedido-preventiva-list.component.css"],
})
export class PedidoPreventivaListComponent implements OnInit, OnDestroy {
  constructor(
    public pedidosService: PedidosPreventivosService,
    public tipoUtilizadorService: TipoUtilizadorService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}
 
  
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
  gmID : number;

  private pedidosSub: Subscription;
  private intervencoesSub: Subscription;

  pageSizeOptions = [5, 8, 12];
  totalPedidos = 0;
  pedidosPerPage = 2;
  currentPage = 1;
  selectedOptionGrupo = 0; 
  selectedOptionDateInicio= "01-01-1990";
  selectedOptionDateFim = "01-01-1990";
  model: any = {};
  

  

  ngOnInit() {

    this.isLoading = true;
    this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage, 0, "01-01-1990", "01-01-1990");
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


  limparFiltros()
  {
    this.ngOnInit();
    this.selectedOptionGrupo = 0;
    this.selectedOptionDateInicio = "01-01-1990";
    this.selectedOptionDateFim = "01-01-1990";
  }
  
  procuraAvancada()
  {
    console.log(this.selectedOptionGrupo, "Grupo selecionado");
    this.isLoading = true;
    this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage, this.selectedOptionGrupo, this.selectedOptionDateInicio, this.selectedOptionDateFim);
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


     //load utilizadores da DB 
/*      loadAspNetUsers() {
      return this.pedidosService.GetAspNetUsers().subscribe((data: {}) => {
        this.aspNetUsersList = data;
      })
    }
     */
    //load tipos de utilizador da DB
    loadTiposUtilizador() {
      return this.tipoUtilizadorService.GetTiposUtilizador().subscribe((data: {}) => {
      this.tipoUtilizadorList = data;
     
   })
  }

  /* 
  converterIDTipoParaDescr(a:number)
  {
    for(let i= 0; i<this.tipoUtilizadorList.length;i++)
    {
      if(a==this.tipoUtilizadorList[i].IDTipo)
      return "(" + this.tipoUtilizadorList[i].TipoDescr + " - " + this.tipoUtilizadorList[i].SeccaoTrabalho +")";
    }

  } */
  

  ngOnDestroy() {
    this.pedidosSub.unsubscribe();
    this.intervencoesSub.unsubscribe();
  }
  //MAT paginator
  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.pedidosPerPage = pageData.pageSize;
    this.pedidosService.getPedidos(this.pedidosPerPage, this.currentPage, this.selectedOptionGrupo, this.selectedOptionDateInicio, this.selectedOptionDateFim);
  }

  loadGrupoMaquinas() {
    return this.pedidosService.GetGruposMaquina().subscribe((data: GrupoMaquina[]) => {
      this.gruposMaquinaList = data;
      console.log(this.gruposMaquinaList);
    })
  }


  openDialog(idPedido) {
    console.log(idPedido, "Passou na componente, ID do Pedido");
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
        var maxI = this.intervencoesFiltradas.reduce(function (prev, current) {
          return prev.PedidoManutPreventivaID > current.PedidoManutPreventivaID ? prev : current;
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
