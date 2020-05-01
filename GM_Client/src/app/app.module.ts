

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.model';
import { AppComponent } from './app.component';

/* Http client module */
import { HttpClientModule } from '@angular/common/http';


/* Service */
import { EquipamentoService } from './shared/equipamento/equipamento.service';
import { GrupoMaquinaService } from './shared/gruposmaquina/grupomaquina.service';
import {AspNetUsersService} from './shared/aspNetUsers/aspNetUsers.service';

/* Forms module */
import { ReactiveFormsModule } from '@angular/forms';

/* Components */

import { EquipListComponent }        from './components/equipamento-list/equip-list.component';
import { EquipAddComponent }         from './components/equipamento-add/equip-add.component';
import { GrupoMaquinaListComponent } from './components/grupomaquina-list/grupomaquina-list.component';
import { EquipEditComponent }        from './components/equipamento-edit/equip-edit.component';
import { RegisterComponent }         from './components/register-add/register-add.component';
import { AuthService}                from './TokenAuth/auth.service';
import { LoginComponent }            from './Login-logout/logincomponent';

import { TipoUtilizadorListComponent } from './components/tipo-utilizador-list/tipo-utilizador-list.component';

import { AspNetUserListComponent } from './components/asp-net-user-list/asp-net-user-list.component';
import { AspNetUserEditComponent } from './components/asp-net-user-edit/asp-net-user-edit.component';
import { PedidoMcurativaListTesteComponent } from './components/pedido-mcurativa-list/pedido-mcurativa-list-teste.component';
import { PedidoMcurativaAddComponent } from './components/pedido-mcurativa-add/pedido-mcurativa-add.component';

//import { AspNetUsersLoadComponent } from './asp-net-users-load/asp-net-users-load.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipListComponent,
    EquipAddComponent, 
    GrupoMaquinaListComponent,
    EquipEditComponent,
    RegisterComponent,
    LoginComponent,
    TipoUtilizadorListComponent,
    AspNetUserListComponent,
 AspNetUserEditComponent,
 PedidoMcurativaListTesteComponent,
 PedidoMcurativaAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  
  providers: [/*PedidoManutCurativaService, EquipamentoService,*/ AuthService], /*Aqui ficar AuthService ou RegisterService */
  bootstrap: [AppComponent]
})

export class AppModule { }