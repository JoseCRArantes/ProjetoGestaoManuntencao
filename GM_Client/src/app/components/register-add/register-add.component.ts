import { Component, OnInit, NgZone } from '@angular/core';
import { RegisterService } from '../../shared/register/register.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TipoUtilizadorService } from '../../shared/tipoUtilizador/tipoUtilizador.service';
import { Router, ActivatedRoute } from '@angular/router';
 


@Component({
  selector: 'app-add-register',
  templateUrl: './register-add.component.html',
  styleUrls: ['./register-add.component.css']
})

export class RegisterComponent implements OnInit {
  equipForm: FormGroup;
  tipoUtilizadorList: any = [];


  ngOnInit() {
    this.addRegister();
    this.loadTiposUtilizador();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public registerService: RegisterService, 
    public tipoUtilizadorService: TipoUtilizadorService,
    private actRoute: ActivatedRoute
  ){ }

  addRegister() {
    this.equipForm = this.fb.group({
      Email : [''],
      Password : [''],
      ConfirmPassword: [''], 
      IDTipo : [0],
      NumeroUtilizador : [0],
      Nome : ['']
    })
  }

  loadTiposUtilizador() {
    return this.tipoUtilizadorService.GetTiposUtilizador().subscribe((data: {}) => {
      this.tipoUtilizadorList = data;
    })
  }

  submitForm() {
    this.registerService.CreateRegisto(this.equipForm.value).subscribe(res => {
      console.log('Registo adicionado!')
      this.ngZone.run(() => this.router.navigateByUrl(''))
    });
  }
}