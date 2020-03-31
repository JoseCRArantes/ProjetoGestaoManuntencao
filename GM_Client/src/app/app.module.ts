

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.model';
import { AppComponent } from './app.component';

/* Http client module */
import { HttpClientModule } from '@angular/common/http';

/* Service */
import { EquipamentoService } from './shared/equipamento.service';
import { GrupoMaquinaService } from './shared/grupomaquina.service'

/* Forms module */
import { ReactiveFormsModule } from '@angular/forms';

/* Components */

import { EquipListComponent } from './components/equipamento-list/equip-list.component';
import { EquipAddComponent } from './components/equipamento-add/equip-add.component';
import { GrupoMaquinaListComponent } from './components/grupomaquina-list/grupomaquina-list.component'
import { EquipEditComponent } from './components/equipamento-edit/equip-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipListComponent,
    EquipAddComponent, 
    GrupoMaquinaListComponent,
    EquipEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EquipamentoService],
  bootstrap: [AppComponent]
})

export class AppModule { }