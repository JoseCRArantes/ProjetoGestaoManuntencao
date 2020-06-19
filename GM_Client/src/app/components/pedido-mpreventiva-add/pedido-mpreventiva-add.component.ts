import { Component, OnInit, NgZone, EventEmitter, Output} from '@angular/core';
import { PedidoManutCurativaTeste } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.model';
import { PedidosPreventivosService } from '../../shared/pedidoMpreventiva/pedidoMpreventiva.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoMaquina } from '../../shared/gruposmaquina/grupomaquinamodel';
import {Equipamento} from '../../shared/equipamento/equipamentomodel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pedido-mpreventiva-add',
  templateUrl: './pedido-mpreventiva-add.component.html',
  styleUrls: ['./pedido-mpreventiva-add.component.css']
})
export class PedidoMpreventivaAddComponent implements OnInit {

  pedidoForm: FormGroup;
  selectedOption: number; 
  gmID : number

  gruposMaquinaList: GrupoMaquina[] = [];
  equipamentosList: Equipamento[] = [];
  equipamentosFiltrados: Equipamento[] = [];

  constructor(public pedidoService: PedidosPreventivosService, 
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router) { }

  ngOnInit(){
    this.addPedido();
    this.loadGrupoMaquinas();
    this.loadEquipamentos();
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


  loadEquipamentos() {
    return this.pedidoService.GetEquipamentosObser().subscribe((data: Equipamento[]) => {
      this.equipamentosList = data;
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
      //IDEstadoIntervencao: [0],
      //DataPedido:['']   
    })
  }


  submitForm() {
    this.pedidoService.postPedido(this.pedidoForm.value);
    this.router.navigateByUrl('/pedido-preventiva-list'); 
    }
    

}
