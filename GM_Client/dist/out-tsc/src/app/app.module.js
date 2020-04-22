import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.model';
import { AppComponent } from './app.component';
/* Http client module */
import { HttpClientModule } from '@angular/common/http';
/* Service */
import { EquipamentoService } from './shared/equipamento/equipamento.service';
/* Forms module */
import { ReactiveFormsModule } from '@angular/forms';
/* Components */
import { EquipListComponent } from './components/equipamento-list/equip-list.component';
import { EquipAddComponent } from './components/equipamento-add/equip-add.component';
import { GrupoMaquinaListComponent } from './components/grupomaquina-list/grupomaquina-list.component';
import { EquipEditComponent } from './components/equipamento-edit/equip-edit.component';
import { RegisterComponent } from './components/register-add/register-add.component';
import { AuthService } from './TokenAuth/auth.service';
import { LoginComponent } from './Login-logout/logincomponent';
import { TipoUtilizadorListComponent } from './components/tipo-utilizador-list/tipo-utilizador-list.component';
import { AspNetUserListComponent } from './components/asp-net-user-list/asp-net-user-list.component';
import { AspNetUserEditComponent } from './components/asp-net-user-edit/asp-net-user-edit.component';
//import { AspNetUsersLoadComponent } from './asp-net-users-load/asp-net-users-load.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            ReactiveFormsModule,
            FormsModule
        ],
        providers: [EquipamentoService, AuthService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map