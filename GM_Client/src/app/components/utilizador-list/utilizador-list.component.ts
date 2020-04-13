import { Component, OnInit } from '@angular/core';
import { UtilizadorService } from '../../shared/utilizador/utilizador.service';
import { TipoUtilizadorService } from '../../shared/tipoUtilizador/tipoUtilizador.service';

@Component({
  selector: 'app-utilizador-list',
  templateUrl: './utilizador-list.component.html',
  styleUrls: ['./utilizador-list.component.css']
})
export class UtilizadorListComponent implements OnInit {

  utilizadorList: any = [];
  tipoUtilizadorList: any = [];

  constructor(
    private utilizadorService : UtilizadorService,
    private tipoUtilizadorService : TipoUtilizadorService
  ) { }


  ngOnInit() {
    this.loadUtilizadores();
    this.loadTiposUtilizador();
  }

  //load utilizadores da DB 
  loadUtilizadores() {
    return this.utilizadorService.GetUtilizador().subscribe((data: {}) => {
      this.utilizadorList = data;
    })
  }

  //load tipos de utilizador da DB
  loadTiposUtilizador() {
       return this.tipoUtilizadorService.GetTiposUtilizador().subscribe((data: {}) => {
       this.tipoUtilizadorList = data;
      
    })
  }

}
