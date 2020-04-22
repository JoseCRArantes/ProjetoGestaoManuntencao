import { Component, OnInit, Input } from '@angular/core';
import { PedidoManutCurativaService } from '../../shared/PedidoManutCurativa/pedidoManutCurativa.service';
import { EquipListComponent } from '../equipamento-list/equip-list.component';


@Component({
  selector: 'app-pedido-curativo-list',
  templateUrl: './pedido-curativo-list.component.html',
  styleUrls: ['./pedido-curativo-list.component.css']
})
export class PedidoCurativoListComponent implements OnInit {

  @Input() recebeEquipamentos : EquipListComponent
  constructor() { }

  ngOnInit() {
    this.recebeEquipamentos.EquipList;
    
  }

}
