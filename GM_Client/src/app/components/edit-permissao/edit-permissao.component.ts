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
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.aspNetRolesService.GetOneUser(id).subscribe((data) => {
      this.updatePermissaoForm = this.fb.group({
        Email: [data.Email],
        Name:[data.Name],
        Nome:[data.Nome],    
        
        
      })
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
var id = this.actRoute.snapshot.paramMap.get('id');
  var rolename = this.actRoute.snapshot.paramMap.get('name');
  this.aspNetRolesService.UpdateAspNetRole(id, rolename , this.updatePermissaoForm.value).subscribe(res => {
    this.ngZone.run(() => this.router.navigateByUrl('/list-permissao'))
  }) 
}


}
