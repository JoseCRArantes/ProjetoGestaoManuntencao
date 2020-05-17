import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {EstadoIntervencao } from '../../shared/estadoIntervencao/estadoIntervencao.model';
import { PedidosService } from '../../shared/pedidoMcurativa-teste/pedidoMcurativa.service';
import {MatSelectModule} from '@angular/material/select';



@Component({
  selector: 'app-intervencao-curativa-add',
  templateUrl: './intervencao-curativa-add.component.html',
  styleUrls: ['./intervencao-curativa-add.component.css']
})
export class IntervencaoCurativaAddComponent implements OnInit {

  //constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  estadoIntervencaoList: EstadoIntervencao[] = [];

  form: FormGroup;
  description:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder , public pedidoServ:PedidosService){}



  

  ngOnInit() 
    {
        this.loadEstadosIntervencao();
    }
  

      loadEstadosIntervencao()
      {
        return this.pedidoServ.GetEstadosIntervencao().subscribe((data: EstadoIntervencao[]) => {
          this.estadoIntervencaoList = data;
        })
          
        
      }

}
