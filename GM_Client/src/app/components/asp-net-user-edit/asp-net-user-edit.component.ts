import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoUtilizadorService } from '../../shared/tipoUtilizador/tipoUtilizador.service';
import { AspNetUsersService } from '../../shared/AspNetUsers/aspNetUsers.service';


@Component({
  selector: 'app-asp-net-user-edit',
  templateUrl: './asp-net-user-edit.component.html',
  styleUrls: ['./asp-net-user-edit.component.css']
})
export class AspNetUserEditComponent implements OnInit {

  updateUtilizadorForm: FormGroup;
  tipoUtilizadorList: any = [];

  ngOnInit(){
    this.updateForm();
    this.loadTiposUtilizador();
  }
  
  constructor(
     private actRoute: ActivatedRoute,    
     public tiposUtilizadorService: TipoUtilizadorService,
     public aspNetUsersService: AspNetUsersService,
     public fb: FormBuilder,
     private ngZone: NgZone,
     private router: Router
  )
   { 

    var id = this.actRoute.snapshot.paramMap.get('id');
    this.aspNetUsersService.GetOneUser(id).subscribe((data) => {
      this.updateUtilizadorForm = this.fb.group({
        UserName: [data.UserName],
        Nome: [data.Nome],
        NumeroUtilizador: [data.NumeroUtilizador],
        IDTipo: [data.IDTipo],       
      })
      console.log(data);
    })
  }

  updateForm(){
    this.updateUtilizadorForm = this.fb.group({
    UserName: [''],
    Nome : [''],
    NumeroUtilizador : [0],
    IDTipo : [0]
    })   
 
  }

  loadTiposUtilizador() {
    return this.tiposUtilizadorService.GetTiposUtilizador().subscribe((data: {}) => {
    this.tipoUtilizadorList = data;})
}

submitForm(){ 
  var id = this.actRoute.snapshot.paramMap.get('id');
  this.aspNetUsersService.UpdateAspNetUser(id, this.updateUtilizadorForm.value).subscribe(res => {
    this.ngZone.run(() => this.router.navigateByUrl('/asp-net-user-list'))
  })
}


}


  




