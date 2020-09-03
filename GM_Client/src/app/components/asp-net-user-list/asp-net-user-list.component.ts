import { Component, OnInit } from '@angular/core';
//import { UtilizadorService } from '../../shared/utilizador/utilizador.service';
import { TipoUtilizadorService } from '../../shared/tipoUtilizador/tipoUtilizador.service';
import { AspNetUsersService } from '../../shared/aspNetUsers/aspNetUsers.service';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-asp-net-user-list',
  templateUrl: './asp-net-user-list.component.html',
  styleUrls: ['./asp-net-user-list.component.css']
})
export class AspNetUserListComponent implements OnInit {

  aspNetUsersList: any = [];
  tipoUtilizadorList: any = [];

  constructor(
    private aspNetUserService : AspNetUsersService,
    private tipoUtilizadorService : TipoUtilizadorService,
    private actRoute: ActivatedRoute
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





