import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AspNetRolesService } from '../../shared/aspNetRoles/aspNetRoles.service';


@Component({
  selector: 'app-edit-permissao',
  templateUrl: './edit-permissao.component.html',
  styleUrls: ['./edit-permissao.component.css']
})
export class EditPermissaoComponent implements OnInit {

  updatePermissaoForm: FormGroup;
  

  ngOnInit(){
    this.updateForm();
  }
  
  constructor(
     private actRoute: ActivatedRoute,    
     public aspNetRolesService: AspNetRolesService,
     public fb: FormBuilder,
     private ngZone: NgZone,
     private router: Router
  )
   { 

    console.log("edit component antes de chamar o getOneUser");
    var email = this.actRoute.snapshot.paramMap.get('Email');
    this.aspNetRolesService.GetOneUser(email).subscribe((data) => {
      this.updatePermissaoForm = this.fb.group({
        Email: [data.Email],
        RoleId: [data.RoleId],
        Name:[data.Name],
        Nome:[data.Nome],     
      })
      console.log(data);
    })
  }

  updateForm(){
    this.updatePermissaoForm = this.fb.group({
    Email: [''],
    RoleId : [''],
    Name : [''],
    Nome : ['']
    })   
 
  }


submitForm(){ 
  var email = this.actRoute.snapshot.paramMap.get('email');
  var rolename = this.actRoute.snapshot.paramMap.get('name');
  this.aspNetRolesService.UpdateAspNetRole(email, rolename , this.updatePermissaoForm.value).subscribe(res => {
    this.ngZone.run(() => this.router.navigateByUrl('/list-permissao'))
  })
}


}
