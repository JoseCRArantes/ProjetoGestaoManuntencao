import { Component, OnInit, NgZone } from '@angular/core';
import { PedidoManutCurativaTeste } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.model';
import { PedidosService } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-mcurativa-add',
  templateUrl: './pedido-mcurativa-add.component.html',
  styleUrls: ['./pedido-mcurativa-add.component.css']
})
export class PedidoMcurativaAddComponent implements OnInit {

  pedidoForm: FormGroup;

  constructor(
    public pedidoService: PedidosService, 
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router) { }

  ngOnInit(){
    this.addPedido();
  }

  addPedido() {
    this.pedidoForm = this.fb.group({
      IDEquipamento : [0],
      Descricao: [''],
      IDEstadoIntervencao: [0],
      DataPedido:['']   
    })
  }

  submitForm() {
    this.pedidoService.postPedido(this.pedidoForm.value);//.subscribe(res => {
     // console.log('Equipamento adicionado!')
      //this.ngZone.run(() => this.router.navigateByUrl('/equip-list'))
    //});
    //this.ngZone.run(() => this.router.navigateByUrl('/pedido-mcurativa-list-teste'));
  }



}
