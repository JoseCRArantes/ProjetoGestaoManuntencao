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
import {IntervencaoAddUserHomePageComponent} from '../intervencao-add-user-home-page/intervencao-add-user-home-page.component';

@Component({
  selector: "app-manutencao-prog-home-page",
  templateUrl: "./manutencao-prog-home-page.component.html",
  styleUrls: ["./manutencao-prog-home-page.component.css"],
})
export class ManutencaoProgHomePageComponent implements OnInit, OnDestroy {
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
  pedidos: PedidoPreventivo[] = [];
  tipoUtilizadorList: any = [];
  pedidosEsperaUser: any = [];
  isLoading = false;
  private intervencoesSub: Subscription;

  constructor(
    public pedidoService: PedidosPreventivosService,
    public tipoUtilizadorService: TipoUtilizadorService,
    public dialog: MatDialog,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnDestroy() {
    this.intervencoesSub.unsubscribe();
  }
  ngOnInit() {
    this.loadEstadosIntervencao();
    this.pedidoService.getIntervencoes();
    this.intervencoesSub = this.pedidoService
      .getIntervencaoUpdateListener()
      .subscribe((intervencoes: IntervencaoPreventivo[]) => {
        this.intervencoes = intervencoes;
      });

    this.addPedido();
    this.loadGrupoMaquinas();
    this.loadEquipamentos();
    this.loadTiposUtilizador();
    this.loadPedidosEsperaUser();
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

  openDialogHPage(idPedido) {
    console.log(idPedido, "passou na componente");
    this.dialog.open(IntervencaoAddUserHomePageComponent, {
      data: { idPedido: idPedido },
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

  loadPedidosEsperaUser() {
    return this.pedidoService.GetPedidosEmEsperaUser().subscribe((data: {}) => {
      this.pedidosEsperaUser = data;
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

  addPedido() {
    this.pedidoForm = this.fb.group({
      Descricao: [""],
      DataLimiteManutencaoPrev: [""],
      UtilizadorIDUser: [""],
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
    return this.pedidoService
      .GetEstadosIntervencao()
      .subscribe((data: EstadoIntervencao[]) => {
        this.estadoIntervencaoList = data;
      });
  }

  /*   listJustgroupmachine() {
    this.gmID = this.selectedOption;

    if (this.equipamentosFiltrados.length > 0) {
      this.equipamentosFiltrados.length = 0;
    }

    for (let j = 0; j < this.equipamentosList.length; j++) {
      if (this.gmID == this.equipamentosList[j].IDGrupoM) {
        this.equipamentosFiltrados.push(this.equipamentosList[j]);
      }
    }
  } */
  /* 
  converterIDTipoParaDescr(a: number) {
    for (let i = 0; i < this.tipoUtilizadorList.length; i++) {
      if (a == this.tipoUtilizadorList[i].IDTipo)
        return (
          "(" +
          this.tipoUtilizadorList[i].TipoDescr +
          " - " +
          this.tipoUtilizadorList[i].SeccaoTrabalho +
          ")"
        );
    }
  }
 */
 

  //load utilizadores da DB
  /*   loadAspNetUsers() {
    return this.pedidoService.GetAspNetUsers().subscribe((data: {}) => {
      this.aspNetUsersList = data;
    });
  } */

  /*   submitFormWithID(selectedOption: number) {
    console.log("Form ID SelectedOption", selectedOption);
    //var id = this.actRoute.snapshot.paramMap.get('id');
    this.pedidoService.postPedidoPerGrupoMaquinas(
      selectedOption,
      this.pedidoForm.value
    );
    //this.ngZone.run(() => this.router.navigateByUrl('/pedido-preventiva-list'))
  } */

  /*   submitForm() {
    this.pedidoService.postPedido(this.pedidoForm.value);
    this.router.navigateByUrl("/pedido-preventiva-list");
  } */
}
