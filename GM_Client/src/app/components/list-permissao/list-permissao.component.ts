import { Component, OnInit } from '@angular/core';
import { AspNetRolesService } from '../../shared/aspNetRoles/aspNetRoles.service';
import { Router, ActivatedRoute } from '@angular/router';
  

@Component({
  selector: 'app-list-permissao',
  templateUrl: './list-permissao.component.html',
  styleUrls: ['./list-permissao.component.css']
})
export class ListPermissaoComponent implements OnInit {

  aspNetRolesList: any = [];

  constructor(
    private aspNetRolesService : AspNetRolesService,
    private actRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    this.loadAspNetRoles();
  }

  //load users e roles da DB 
  loadAspNetRoles() {
    return this.aspNetRolesService.GetAspNetUsers().subscribe((data: {}) => {
      this.aspNetRolesList = data;
    })
  }

 



}
