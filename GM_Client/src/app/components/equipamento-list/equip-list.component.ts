import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { EquipamentoService } from '../../shared/equipamento/equipamento.service';
import { GrupoMaquinaService } from '../../shared/gruposmaquina/grupomaquina.service';
import { Equipamento } from 'src/app/shared/equipamento/equipamentomodel';

@Component({
  selector: 'app-equip-list',
  templateUrl: './equip-list.component.html',
  styleUrls: ['./equip-list.component.css']
})
export class EquipListComponent implements OnInit {

  
  EquipList : Equipamento[] = []; //criar um array de objecto equipamentos.
  //EquipList: any = [];
  gruposMaquinaList: any = [];

  equipToPedidos(){
    this.EquipList;
  }

  ngOnInit() {
    this.loadEquip();
    this.loadGrupoMaquinas();
  }

  constructor(
    public equipamentoService: EquipamentoService,
    public grupoMaquinaService: GrupoMaquinaService
  ){ }

   // lista equipamentos 
   loadEquip() {
    return this.equipamentoService.GetEquipamentos().subscribe((data: Equipamento[]) => {
      this.EquipList = data;
    })
  }

  //load dos grupos de máquinas.
  loadGrupoMaquinas() {
       return this.grupoMaquinaService.GetGruposMaquina().subscribe((data: {}) => {
       this.gruposMaquinaList = data;
      
    })
  }
}