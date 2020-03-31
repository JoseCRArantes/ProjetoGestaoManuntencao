import { Component, OnInit, NgZone } from '@angular/core';
import { EquipamentoService } from '../../shared/equipamento.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-equip',
  templateUrl: './equip-edit.component.html',
  styleUrls: ['./equip-edit.component.css']
})

export class EquipEditComponent implements OnInit {
  EquipList: any = [];
  updateEquipForm: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }

  constructor(
    private actRoute: ActivatedRoute,    
    public equipService: EquipamentoService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
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

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.equipService.UpdateEquipamento(id, this.updateEquipForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/equip-list'))
    })
  }

}