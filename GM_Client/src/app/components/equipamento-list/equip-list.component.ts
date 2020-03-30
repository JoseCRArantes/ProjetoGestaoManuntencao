import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../../shared/equipamento.service';

@Component({
  selector: 'app-equip-list',
  templateUrl: './equip-list.component.html',
  styleUrls: ['./equip-list.component.css']
})
export class EquipListComponent implements OnInit {

  EquipList: any = [];


  ngOnInit() {
    this.loadEquip();
  }

  constructor(
    public equipamentoService: EquipamentoService
  ){ }

   // lista equipamentos 
   loadEquip() {
    return this.equipamentoService.GetEquipamentos().subscribe((data: {}) => {
      this.EquipList = data;
    })
  }


}