import { Component, OnInit } from '@angular/core';
//import { UtilizadorService } from '../../shared/utilizador/utilizador.service';
import { TipoUtilizadorService } from '../../shared/tipoUtilizador/tipoUtilizador.service';
import { AspNetUsersService } from '../../shared/aspNetUsers/aspNetUsers.service';

@Component({
  selector: 'app-utilizador-list',
  templateUrl: './utilizador-list.component.html',
  styleUrls: ['./utilizador-list.component.css']
})
export class UtilizadorListComponent implements OnInit {

  aspNetUsersList: any = [];
  tipoUtilizadorList: any = [];

  constructor(
    private aspNetUserService : AspNetUsersService,
    private tipoUtilizadorService : TipoUtilizadorService
  ) { }


  ngOnInit() {
    this.loadAspNetUsers();
    this.loadTiposUtilizador();
  }

  //load utilizadores da DB 
  loadAspNetUsers() {
    return this.aspNetUserService.GetAspNetUsers().subscribe((data: {}) => {
      this.aspNetUsersList = data;
    })
  }

  //load tipos de utilizador da DB
  loadTiposUtilizador() {
    return this.tipoUtilizadorService.GetTiposUtilizador().subscribe((data: {}) => {
    this.tipoUtilizadorList = data;
   
 })
}

}
