import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipListComponent } from './components/equipamento-list/equip-list.component';
import { GrupoMaquinaListComponent } from './components/grupomaquina-list/grupomaquina-list.component';
import { EquipAddComponent} from './components/equipamento-add/equip-add.component';
import { EquipEditComponent } from './components/equipamento-edit/equip-edit.component';
import {RegisterComponent } from './components/register-add/register-add.component';
import { LoginComponent} from './Login-logout/logincomponent'
import {UtilizadorAddComponent} from './components/utilizador-add/utilizador-add.component';

const routes: Routes = [
  { path: 'edit-equip/:id', component: EquipEditComponent },
  { path: 'equip-list', component: EquipListComponent },
  { path: 'add-equip', component: EquipAddComponent },
  { path: 'grupomaquina-list', component: GrupoMaquinaListComponent },
  { path: 'add-register', component: RegisterComponent},
  { path: 'my-login', component: LoginComponent },
  { path: 'utilizador-add', component: UtilizadorAddComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }