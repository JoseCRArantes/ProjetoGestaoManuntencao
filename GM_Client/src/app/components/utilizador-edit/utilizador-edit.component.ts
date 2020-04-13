import { Component, OnInit, NgZone } from '@angular/core';
import { UtilizadorService } from '../../shared/utilizador/utilizador.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoUtilizadorService } from '../../shared/tipoUtilizador/tipoUtilizador.service';

@Component({
  selector: 'app-utilizador-edit',
  templateUrl: './utilizador-edit.component.html',
  styleUrls: ['./utilizador-edit.component.css']
})
export class UtilizadorEditComponent implements OnInit {

  updateUtilizadorForm: FormGroup;
  tipoUtilizadorList: any = [];
  
  ngOnInit() {
    this.updateForm();
    this.loadTiposUtilizador();
  }

  constructor
  (
    private actRoute: ActivatedRoute,    
    public utilizadorService: UtilizadorService,
    public tiposUtilizadorService: TipoUtilizadorService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) 
  { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.utilizadorService.GetOneUtilizador(id).subscribe((data) => {
      this.updateUtilizadorForm = this.fb.group({
        Id: [data.Id],
        Nome: [data.Nome],
        NumeroUtilizador: [data.NumeroUtilizador],
        IDTipo: [data.IDTipo],       
        DataInativacao : [data.DataInativacao]
      })
    })
  }

  updateForm(){
    this.updateUtilizadorForm = this.fb.group({
    Id: [''],
    Nome : [''],
    NumeroUtilizador : [0],
    IDTipo : [0], 
    DataInativacao : [Date]
    })    
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.utilizadorService.UpdateUtilizador(id, this.updateUtilizadorForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/utilizador-list'))
    })
  }

  loadTiposUtilizador() {
    return this.tiposUtilizadorService.GetTiposUtilizador().subscribe((data: {}) => {
    this.tipoUtilizadorList = data;
   
 })
}
}
