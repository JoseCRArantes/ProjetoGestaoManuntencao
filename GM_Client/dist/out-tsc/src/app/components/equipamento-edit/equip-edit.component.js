import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EquipEditComponent = class EquipEditComponent {
    constructor(actRoute, equipService, fb, ngZone, router, grupoMaquinaService) {
        this.actRoute = actRoute;
        this.equipService = equipService;
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.grupoMaquinaService = grupoMaquinaService;
        this.gruposMaquinaList = [];
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
            });
        });
    }
    ngOnInit() {
        this.updateForm();
        this.loadGrupoMaquinas();
    }
    updateForm() {
        this.updateEquipForm = this.fb.group({
            IDEquipamento: [0],
            IDGrupoM: [0],
            NumeroSerie: [''],
            Descr: [''],
            Marca: [''],
            Tipo: [''],
            DataCompra: [Date],
            CodigoInterno: [''],
            EstadoEqui: [0],
            DataFimAtividade: [Date]
        });
    }
    loadGrupoMaquinas() {
        return this.grupoMaquinaService.GetGruposMaquina().subscribe((data) => {
            this.gruposMaquinaList = data;
        });
    }
    submitForm() {
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.equipService.UpdateEquipamento(id, this.updateEquipForm.value).subscribe(res => {
            this.ngZone.run(() => this.router.navigateByUrl('/equip-list'));
        });
    }
};
EquipEditComponent = __decorate([
    Component({
        selector: 'app-edit-equip',
        templateUrl: './equip-edit.component.html',
        styleUrls: ['./equip-edit.component.css']
    })
], EquipEditComponent);
export { EquipEditComponent };
//# sourceMappingURL=equip-edit.component.js.map