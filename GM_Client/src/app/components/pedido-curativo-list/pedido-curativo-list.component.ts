import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoManutCurativaService } from '../../shared/PedidoManutCurativa/pedidoManutCurativa.service';
import { EquipListComponent } from '../equipamento-list/equip-list.component';
import { Equipamento} from '../../shared/equipamento/equipamentomodel';


@Component({
  selector: 'app-pedido-curativo-list',
  templateUrl: './pedido-curativo-list.component.html',
  styleUrls: ['./pedido-curativo-list.component.css']
})
export class PedidoCurativoListComponent implements OnInit {

  @Input() equipList : any[];


  
  pedidosCurativosList: any = [];


 // @Input() equipamentos: Equipamento[];

  constructor(
    public pedidoManutencaoCurativaService : PedidoManutCurativaService,

  ) 
  
  { }

  ngOnInit() {
    //this.recebeEquipamentos.EquipList;
    this.loadPedidos();
  }


     // lista equipamentos 
     loadPedidos() {
      return this.pedidoManutencaoCurativaService.GetPedidos().subscribe((data: {}) => {
        this.pedidosCurativosList = data;
      })
    }


}
