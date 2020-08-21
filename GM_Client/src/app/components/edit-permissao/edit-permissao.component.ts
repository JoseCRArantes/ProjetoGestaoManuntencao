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

  arrayPermissao  = [
    {Name: "Admin" },
    {Name: "Membro" },
    {Name:  "Utilizador"}
    ]

    roleName = "";
    userName = "";
    oldRoleName ="";
  

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
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.aspNetRolesService.GetOneUser(id).subscribe((data) => {
      this.updatePermissaoForm = this.fb.group({
        Email: [data.Email],
        Name:[data.Name],
        Nome:[data.Nome],    
        
        
      })
      this.userName = data.Email;
      this.oldRoleName = data.Name;
      this.roleName = data.Name;
      console.log(data);
    })
  }

  updateForm(){
    this.updatePermissaoForm = this.fb.group({
    Email: [''],
    Name : [''],
    Nome : ['']
    })   
 
  }


submitForm(){ 
/* var id = this.actRoute.snapshot.paramMap.get('Email');
  var rolename = this.actRoute.snapshot.paramMap.get('Name');
  console.log(id, "id ---, ", rolename, " role" ); */
  console.log("UsernameNGMODEL: ", this.userName); 
  console.log("RoleNameNGMODEL: ", this.roleName); 

  this.aspNetRolesService.UpdateAspNetRole(this.userName, this.roleName, this.oldRoleName, this.updatePermissaoForm.value).subscribe(res => {
    this.ngZone.run(() => this.router.navigateByUrl('/list-permissao'))
  }) 
}


}
