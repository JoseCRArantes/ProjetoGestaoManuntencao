import { Component, OnInit, NgZone, EventEmitter, Output} from '@angular/core';
import { PedidoManutCurativaTeste } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.model';
import { PedidosService } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoMaquina } from '../../shared/gruposmaquina/grupomaquinamodel';
import {Equipamento} from '../../shared/equipamento/equipamentomodel';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pedido-mcurativa-add',
  templateUrl: './pedido-mcurativa-add.component.html',
  styleUrls: ['./pedido-mcurativa-add.component.css']
})
export class PedidoMcurativaAddComponent implements OnInit {

  pedidoForm: FormGroup;
  selectedOption: number; 
  gmID : number

  gruposMaquinaList: GrupoMaquina[] = [];
  equipamentosList: Equipamento[] = [];
  equipamentosFiltrados: Equipamento[] = [];

  constructor(
    public pedidoService: PedidosService, 
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private actRoute: ActivatedRoute   ) { }

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

  // lista equipamentos 
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
    this.router.navigateByUrl('/pedido-mcurativa-list-teste'); 
    }
    
  



}
