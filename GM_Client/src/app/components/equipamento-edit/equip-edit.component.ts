import { Component, OnInit, NgZone } from '@angular/core';

import { EquipamentoService } from '../../shared/equipamento/equipamento.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GrupoMaquinaService } from '../../shared/gruposmaquina/grupomaquina.service';


@Component({
  selector: 'app-edit-equip',
  templateUrl: './equip-edit.component.html',
  styleUrls: ['./equip-edit.component.css']
})

export class EquipEditComponent implements OnInit {

  dict = [
    [1, "Ativo"],
    [0, "Desativo"]
    ];



  gruposMaquinaList: any = [];
  updateEquipForm: FormGroup;
  
  ngOnInit() {
    this.updateForm();
    this.loadGrupoMaquinas();
  }

  constructor(
    private actRoute: ActivatedRoute,    
    public equipService: EquipamentoService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router, 
    public grupoMaquinaService : GrupoMaquinaService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.equipService.GetOneEquip(id).subscribe((data) => {
      this.updateEquipForm = this.fb.group({
        IDEquipamento: [data.IDEquipamento],
        IDGrupoM: [data.IDGrupoM],
        NumeroSerie: [data.NumeroSerie],
        Descr: [data.Descr],
        Marca: [data.Marca],
        Tipo: [data.Tipo],
        DataCompra: [data.DataCompra],
        CodigoInterno: [data.CodigoInterno],
        EstadoEqui: [data.EstadoEqui],
        DataFimAtividade: [data.DataFimAtividade]
      })
    })
  }

  updateForm(){
    this.updateEquipForm = this.fb.group({
    IDEquipamento: [0],
    IDGrupoM : [0],
    NumeroSerie : [''],
    Descr: [''],
    Marca: [''],
    Tipo: [''],
    DataCompra: [Date],
    CodigoInterno: [''],
    EstadoEqui: [0],
    DataFimAtividade: [Date]
    })    
  }

  loadGrupoMaquinas() {
    return this.grupoMaquinaService.GetGruposMaquina().subscribe((data: {}) => {
      this.gruposMaquinaList = data;
    })
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.equipService.UpdateEquipamento(id, this.updateEquipForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/equip-list'))
    })
  }

  
}