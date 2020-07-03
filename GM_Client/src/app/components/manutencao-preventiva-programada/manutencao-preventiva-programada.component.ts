
import { Component, OnInit, NgZone, EventEmitter, Output} from '@angular/core';
import { PedidosPreventivosService } from '../../shared/pedidoMpreventiva/pedidoMpreventiva.service';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoMaquina } from '../../shared/gruposmaquina/grupomaquinamodel';
import { Equipamento} from '../../shared/equipamento/equipamentomodel';
import { PedidoPreventivo } from '../../shared/pedidoMpreventiva/pedidoMpreventiva.model';
import { AspNetUsers } from '../../shared/pedidoMpreventiva/aspNetUsers.model';
import {TipoUtilizadorService} from '../../shared/tipoUtilizador/tipoUtilizador.service';
import { TipoUtilizador} from '../../shared/tipoUtilizador/tipoUtilizador.model';

@Component({
  selector: 'app-manutencao-preventiva-programada',
  templateUrl: './manutencao-preventiva-programada.component.html',
  styleUrls: ['./manutencao-preventiva-programada.component.css']
})
export class ManutencaoPreventivaProgramadaComponent implements OnInit {

  pedidoForm: FormGroup;
  selectedOption: number; 
  selectedUser: string;
  gmID : number;

  gruposMaquinaList: GrupoMaquina[] = [];
  equipamentosList: Equipamento[] = [];
  equipamentosFiltrados: Equipamento[] = [];
  aspNetUsersList: any = [];
  tipoUtilizadorList: any = [];

  constructor(public pedidoService: PedidosPreventivosService, 
   // public aspNetUserService: AspNetUsers,
    public tipoUtilizadorService: TipoUtilizadorService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router) { }

  ngOnInit(){
    this.addPedido();
    this.loadGrupoMaquinas();
    this.loadEquipamentos();
    this.loadAspNetUsers();
    this.loadTiposUtilizador();
  }

  listJustgroupmachine()
    {
        this.gmID = this.selectedOption;

        if(this.equipamentosFiltrados.length>0)
          {
            this.equipamentosFiltrados.length=0;
          }   

        for (let j = 0; j < this.equipamentosList.length; j++) 
        {
          if (this.gmID == this.equipamentosList[j].IDGrupoM) 
          {
            this.equipamentosFiltrados.push(this.equipamentosList[j]);           
          }
        }  
    } 

    converterIDTipoParaDescr(a:number)
    {
      for(let i= 0; i<this.tipoUtilizadorList.length;i++)
      {
        if(a==this.tipoUtilizadorList[i].IDTipo)
        return "(" + this.tipoUtilizadorList[i].TipoDescr + " - " + this.tipoUtilizadorList[i].SeccaoTrabalho +")";
      }

    }


  loadEquipamentos() {
    return this.pedidoService.GetEquipamentosObser().subscribe((data: Equipamento[]) => {
      this.equipamentosList = data;
    })
  }

    //load tipos de utilizador da DB
    loadTiposUtilizador() {
      return this.tipoUtilizadorService.GetTiposUtilizador().subscribe((data: {}) => {
      this.tipoUtilizadorList = data;
     
   })
  }
  
 
  loadGrupoMaquinas() {
    return this.pedidoService.GetGruposMaquina().subscribe((data: GrupoMaquina[]) => {
      this.gruposMaquinaList = data;
      console.log(this.gruposMaquinaList);
    })
  }
  
  addPedido() {
    this.pedidoForm = this.fb.group({
      IDEquipamento : [0],
      Descricao: [''],
      DataLimiteManutencaoPrev: [''],
      UtilizadorIDUser: ['']
    })
  }
    //load utilizadores da DB 
    loadAspNetUsers() {
      return this.pedidoService.GetAspNetUsers().subscribe((data: {}) => {
        this.aspNetUsersList = data;
      })
    }

/*   submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.equipService.UpdateEquipamento(id, this.updateEquipForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/equip-list'))
    })
  } */

  submitForm() {
    this.pedidoService.postPedido(this.pedidoForm.value);
    this.router.navigateByUrl('/pedido-preventiva-list'); 
    }
}
