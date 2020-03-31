import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipListComponent } from './components/equipamento-list/equip-list.component';
import { GrupoMaquinaListComponent } from './components/grupomaquina-list/grupomaquina-list.component'
import { EquipAddComponent} from './components/equipamento-add/equip-add.component';
import { EquipEditComponent } from './components/equipamento-edit/equip-edit.component'

const routes: Routes = [
  { path: 'edit-equip/:id', component: EquipEditComponent },
  { path: 'equip-list', component: EquipListComponent },
  { path: 'add-equip', component: EquipAddComponent },
  { path: 'grupomaquina-list', component: GrupoMaquinaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }