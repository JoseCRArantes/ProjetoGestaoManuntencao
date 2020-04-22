import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EquipAddComponent = class EquipAddComponent {
    constructor(fb, ngZone, router, equipamentoService, grupoMaquinaService) {
        this.fb = fb;
        this.ngZone = ngZone;
        this.router = router;
        this.equipamentoService = equipamentoService;
        this.grupoMaquinaService = grupoMaquinaService;
        this.EquipArr = [];
        this.gruposMaquinaList = [];
    }
    ngOnInit() {
        this.addEquipamento(),
            this.loadGrupoMaquinas();
    }
    addEquipamento() {
        this.equipForm = this.fb.group({
            IDGrupoM: [0],
            NumeroSerie: [''],
            Descr: [''],
            Marca: [''],
            Tipo: [''],
            DataCompra: [''],
            CodigoInterno: [''],
            EstadoEqui: [0],
            DataFimAtividade: ['']
        });
    }
    loadGrupoMaquinas() {
        return this.grupoMaquinaService.GetGruposMaquina().subscribe((data) => {
            this.gruposMaquinaList = data;
        });
    }
    submitForm() {
        this.equipamentoService.CreateEquip(this.equipForm.value).subscribe(res => {
            console.log('Equipamento adicionado!');
            this.ngZone.run(() => this.router.navigateByUrl('/equip-list'));
        });
    }
};
EquipAddComponent = __decorate([
    Component({
        selector: 'app-add-equip',
        templateUrl: './equip-add.component.html',
        styleUrls: ['./equip-add.component.css']
    })
], EquipAddComponent);
export { EquipAddComponent };
//# sourceMappingURL=equip-add.component.js.map