import {
  Component,
  OnInit,
  NgZone,
  EventEmitter,
  Output,
  OnDestroy,
} from "@angular/core";
import { PedidosPreventivosService } from "../../shared/pedidoMpreventiva/pedidoMpreventiva.service";
import { NgForm, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { GrupoMaquina } from "../../shared/gruposmaquina/grupomaquinamodel";
import { Equipamento } from "../../shared/equipamento/equipamentomodel";
import { PedidoPreventivo } from "../../shared/pedidoMpreventiva/pedidoMpreventiva.model";
import { AspNetUsers } from "../../shared/pedidoMpreventiva/aspNetUsers.model";
import { TipoUtilizadorService } from "../../shared/tipoUtilizador/tipoUtilizador.service";
import { TipoUtilizador } from "../../shared/tipoUtilizador/tipoUtilizador.model";
import { Subscription } from "rxjs";
import { IntervencaoPreventivo } from "src/app/shared/pedidoMpreventiva/intervencaoPreventiva.model";
import { EstadoIntervencao } from "../../shared/estadoIntervencao/estadoIntervencao.model";
import { MatDialog } from "@angular/material/dialog";
import { IntervencaoAddUserHomePageComponent } from "../intervencao-add-user-home-page/intervencao-add-user-home-page.component";
import { IntervencaoPreventivaAddComponent } from "../intervencao-preventiva-add/intervencao-preventiva-add.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-manutencao-prog-home-page",
  templateUrl: "./manutencao-prog-home-page.component.html",
  styleUrls: ["./manutencao-prog-home-page.component.css"],
})
export class ManutencaoProgHomePageComponent implements OnInit, OnDestroy {
  constructor(
    public pedidoService: PedidosPreventivosService,
    public tipoUtilizadorService: TipoUtilizadorService,
    public dialog: MatDialog,
    private actRoute: ActivatedRoute
  ) {}
  pedidoForm: FormGroup;
  selectedOption: number;
  selectedUser: string;
  gmID: number;

  gruposMaquinaList: GrupoMaquina[] = [];
  equipamentosList: Equipamento[] = [];
  equipamentosFiltrados: Equipamento[] = [];
  aspNetUsersList: any = [];
  intervencoes: IntervencaoPreventivo[] = [];
  estadoIntervencaoList: EstadoIntervencao[] = [];
  intervencoesFiltradas: IntervencaoPreventivo[] = [];

  tipoUtilizadorList: any = [];
  pedidosEsperaUser: PedidoPreventivo[] = [];
  isLoading = false;
  private intervencoesSub: Subscription;
  private pedidosSub: Subscription;
  private pedidosUserSub: Subscription;
  totalPedidos : number;

  ngOnDestroy() {
    this.pedidosUserSub.unsubscribe();
  }
  ngOnInit() {
    this.pedidoService.getPedidosUser();
    this.pedidosUserSub = this.pedidoService
      .getPedidosUserUpdateListener()
      .subscribe((pedidosuser: PedidoPreventivo[]) => {
        this.pedidosEsperaUser = pedidosuser;
        this.totalPedidos = this.pedidosEsperaUser.length;
      });
    this.loadEstadosIntervencao();
    
    
    this.loadGrupoMaquinas();
    this.loadEquipamentos();
    this.loadTiposUtilizador();
    }

    mudaNumeroPedidos()
    {
      let utilizadorIDUser = "";

      if(this.totalPedidos ==0)
      utilizadorIDUser = " pedidos";
      if(this.totalPedidos==1)
      utilizadorIDUser = " pedido"
      if(this.totalPedidos>1)
      utilizadorIDUser =" pedidos";
      return utilizadorIDUser;
    }

  //Troca no front-end, o ID do equipamento pelo código interno da empresa
  changeIDtoInternalCode(equip: number) {
    for (let j = 0; j < this.equipamentosList.length; j++) {
      if (
        this.pedidosEsperaUser[equip].IDEquipamento ==
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

  openDialog(IDPedido) {
    this.dialog.open(IntervencaoAddUserHomePageComponent, {
      data: { IDPedido: IDPedido },
    });
  }

  loadEquipamentos() {
    return this.pedidoService
      .GetEquipamentosObser()
      .subscribe((data: Equipamento[]) => {
        this.equipamentosList = data;
      });
  }

  //load tipos de utilizador da DB
  loadTiposUtilizador() {
    return this.tipoUtilizadorService
      .GetTiposUtilizador()
      .subscribe((data: {}) => {
        this.tipoUtilizadorList = data;
      });
  }

  loadGrupoMaquinas() {
    return this.pedidoService
      .GetGruposMaquina()
      .subscribe((data: GrupoMaquina[]) => {
        this.gruposMaquinaList = data;
        console.log(this.gruposMaquinaList);
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

  //lista estados de intervenção.
  loadEstadosIntervencao() {
    return this.pedidoService
      .GetEstadosIntervencao()
      .subscribe((data: EstadoIntervencao[]) => {
        this.estadoIntervencaoList = data;
      });
  }
}
