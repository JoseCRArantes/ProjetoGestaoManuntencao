import { Component, OnInit, NgZone } from '@angular/core';
import { TipoUtilizadorService } from '../../shared/tipoUtilizador/tipoUtilizador.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilizadorService } from '../../shared/utilizador/Utilizador.service';


@Component({
  selector: 'app-utilizador-add',
  templateUrl: './utilizador-add.component.html',
  styleUrls: ['./utilizador-add.component.css']
})
export class UtilizadorAddComponent implements OnInit {

  utilForm: FormGroup;
  tipoUtilizadorList: any = [];

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router, 
    public tipoUtilizadorService: TipoUtilizadorService,
    public utilizadorService: UtilizadorService
  ) { }

  ngOnInit() {
    this.addUtilizador(),
    this.loadTiposUtilizador();

  }

  // Id : [''],
  addUtilizador() {
    this.utilForm = this.fb.group({
      Id : localStorage.getItem('idusername'),
      IDTipo : [0],
      NumeroUtilizador: [0],
      Nome: [''],
      DataInativacao:[''] 
    })
  }

  loadTiposUtilizador() {
    return this.tipoUtilizadorService.GetTiposUtilizador().subscribe((data: {}) => {
      this.tipoUtilizadorList = data;
    })
  }

  submitForm() {
    this.utilizadorService.CreateUtilizador(this.utilForm.value).subscribe(res => {
      console.log('Utilizador adicionado!')
      this.ngZone.run(() => this.router.navigateByUrl('/'))
    });
  }
}

