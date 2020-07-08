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

@Component({
  selector: "app-manutencao-prog-home-page",
  templateUrl: "./manutencao-prog-home-page.component.html",
  styleUrls: ["./manutencao-prog-home-page.component.css"],
})
export class ManutencaoProgHomePageComponent implements OnInit {
  pedidoForm: FormGroup;
  selectedOption: number;
  selectedUser: string;
  gmID: number;

  gruposMaquinaList: GrupoMaquina[] = [];
  equipamentosList: Equipamento[] = [];
  equipamentosFiltrados: Equipamento[] = [];
  aspNetUsersList: any = [];
  pedidos:PedidoPreventivo[]=[];
  tipoUtilizadorList: any = [];
  pedidosEsperaUser: any= [];
  isLoading = false;


  constructor(
    public pedidoService: PedidosPreventivosService,
    public tipoUtilizadorService: TipoUtilizadorService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit() {
    this.addPedido();
    this.loadGrupoMaquinas();
    this.loadEquipamentos();
    this.loadAspNetUsers();
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

  listJustgroupmachine() {
    this.gmID = this.selectedOption;

    if (this.equipamentosFiltrados.length > 0) {
      this.equipamentosFiltrados.length = 0;
    }

    for (let j = 0; j < this.equipamentosList.length; j++) {
      if (this.gmID == this.equipamentosList[j].IDGrupoM) {
        this.equipamentosFiltrados.push(this.equipamentosList[j]);
      }
    }
  }

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

  loadPedidosEsperaUser(){
    return this.pedidoService.
    GetPedidosEmEsperaUser()
    .subscribe((data:{})=>{
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

  //load utilizadores da DB
  loadAspNetUsers() {
    return this.pedidoService.GetAspNetUsers().subscribe((data: {}) => {
      this.aspNetUsersList = data;
    });
  }

  submitFormWithID(selectedOption: number) {
    console.log("Form ID SelectedOption", selectedOption);
    //var id = this.actRoute.snapshot.paramMap.get('id');
    this.pedidoService.postPedidoPerGrupoMaquinas(
      selectedOption,
      this.pedidoForm.value
    );
    //this.ngZone.run(() => this.router.navigateByUrl('/pedido-preventiva-list'))
  }

  submitForm() {
    this.pedidoService.postPedido(this.pedidoForm.value);
    this.router.navigateByUrl("/pedido-preventiva-list");
  }
}
