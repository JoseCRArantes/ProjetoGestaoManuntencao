
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PedidoManutCurativaTeste } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.model';
import { PedidosService } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.service';

@Component({
  selector: 'app-pedido-mcurativa-list-teste',
  templateUrl: './pedido-mcurativa-list-teste.component.html',
  styleUrls: ['./pedido-mcurativa-list-teste.component.css']
})
export class PedidoMcurativaListTesteComponent implements OnInit, OnDestroy {

  pedidos: PedidoManutCurativaTeste[] = [];
  private pedidosSub: Subscription;

  constructor(public pedidosService: PedidosService){
  }

  ngOnInit(){
    
    this.pedidosService.getPedidos();
    this.pedidosSub = this.pedidosService.getPedidoUpdateListener().subscribe((pedidos: PedidoManutCurativaTeste[]) => {
    this.pedidos = pedidos;
    
    });
    }

    ngOnDestroy(){
      this.pedidosSub.unsubscribe();
      }
}
