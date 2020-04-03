import { Component, OnInit, NgZone } from '@angular/core';
import { RegisterService } from '../../shared/register/register.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-register',
  templateUrl: './register-add.component.html',
  styleUrls: ['./register-add.component.css']
})

export class RegisterComponent implements OnInit {
  equipForm: FormGroup;
  EquipArr: any = [];
  gruposMaquinaList: any = [];


  ngOnInit() {
    this.addRegister()
    
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public registerService: RegisterService
  ){ }

  addRegister() {
    this.equipForm = this.fb.group({
      Email : [''],
      Password : [''],
      ConfirmPassword: ['']
    })
  }

  submitForm() {
    this.registerService.CreateRegisto(this.equipForm.value).subscribe(res => {
      console.log('Registo adicionado!')
      this.ngZone.run(() => this.router.navigateByUrl(''))
    });
  }
}