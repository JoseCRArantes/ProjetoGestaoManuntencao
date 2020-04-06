import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../../shared/equipamento/equipamento.service';
import { GrupoMaquinaService } from '../../shared/gruposmaquina/grupomaquina.service';

@Component({
  selector: 'app-equip-list',
  templateUrl: './equip-list.component.html',
  styleUrls: ['./equip-list.component.css']
})
export class EquipListComponent implements OnInit {

  EquipList: any = [];
  gruposMaquinaList: any = [];


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
    return this.equipamentoService.GetEquipamentos().subscribe((data: {}) => {
      this.EquipList = data;
    })
  }

  //load dos grupos de máquinas.
  loadGrupoMaquinas() {
   // return this.grupoMaquinaService.GetGruposMaquina().subscribe((data: {}) => {
      //this.gruposMaquinaList = data;
      return {};
    //})
  }
}