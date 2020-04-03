import { Component, OnInit, NgZone } from '@angular/core';
import { EquipamentoService } from '../../shared/equipamento/equipamento.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GrupoMaquinaService } from '../../shared/gruposmaquina/grupomaquina.service';

@Component({
  selector: 'app-add-equip',
  templateUrl: './equip-add.component.html',
  styleUrls: ['./equip-add.component.css']
})

export class EquipAddComponent implements OnInit {
  equipForm: FormGroup;
  EquipArr: any = [];
  gruposMaquinaList: any = [];


  ngOnInit() {
    this.addEquipamento(),
    this.loadGrupoMaquinas();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public equipamentoService: EquipamentoService, 
    public grupoMaquinaService: GrupoMaquinaService
  ){ }

  addEquipamento() {
    this.equipForm = this.fb.group({
      IDGrupoM : [0],
      NumeroSerie : [''],
      Descr: [''],
      Marca: [''],
      Tipo:[''],
      DataCompra: [''],
      CodigoInterno: [''],
      EstadoEqui: [0],
      DataFimAtividade:['']   
    })
  }

  loadGrupoMaquinas() {
    return this.grupoMaquinaService.GetGruposMaquina().subscribe((data: {}) => {
      this.gruposMaquinaList = data;
    })
  }

  submitForm() {
    this.equipamentoService.CreateEquip(this.equipForm.value).subscribe(res => {
      console.log('Equipamento adicionado!')
      this.ngZone.run(() => this.router.navigateByUrl('/equip-list'))
    });
  }
}