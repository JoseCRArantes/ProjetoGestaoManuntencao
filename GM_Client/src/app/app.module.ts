import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormBuilder, FormsModule, FormGroup } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.model";
import { AppComponent } from "./app.component";

/* Http client module */
import { HttpClientModule } from "@angular/common/http";

/* Service */


/* Forms module */
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
} from "@angular-material-components/datetime-picker";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatMenuModule} from '@angular/material/menu';
import { MatDatepickerModule } from "@angular/material/datepicker";
import {  MatListModule } from  '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";

/* Components */
import { EquipListComponent } from "./components/equipamento-list/equip-list.component";
import { EquipAddComponent } from "./components/equipamento-add/equip-add.component";
import { GrupoMaquinaListComponent } from "./components/grupomaquina-list/grupomaquina-list.component";
import { EquipEditComponent } from "./components/equipamento-edit/equip-edit.component";
import { RegisterComponent } from "./components/register-add/register-add.component";
import { AuthService } from "./TokenAuth/auth.service";
import { LoginComponent } from "./Login-logout/logincomponent";
import { AspNetUserListComponent } from "./components/asp-net-user-list/asp-net-user-list.component";
import { AspNetUserEditComponent } from "./components/asp-net-user-edit/asp-net-user-edit.component";
import { PedidoMcurativaListTesteComponent } from "./components/pedido-mcurativa-list/pedido-mcurativa-list-teste.component";
import { PedidoMcurativaAddComponent } from "./components/pedido-mcurativa-add/pedido-mcurativa-add.component";
import { IntervencaoCurativaAddComponent } from "./components/intervencao-curativa-add/intervencao-curativa-add.component";
import { PedidoPreventivaListComponent } from './components/pedido-preventiva-list/pedido-preventiva-list.component';
import { PedidoMpreventivaAddComponent } from './components/pedido-mpreventiva-add/pedido-mpreventiva-add.component';
import { EquipamentoService } from "./shared/equipamento/equipamento.service";
import { GrupoMaquinaService } from "./shared/gruposmaquina/grupomaquina.service";
import { AspNetUsersService } from "./shared/aspNetUsers/aspNetUsers.service";
import { HeaderComponent } from "./components/header/header.component";
import { IntervencaoPreventivaAddComponent } from './components/intervencao-preventiva-add/intervencao-preventiva-add.component';
import { ManutencaoPreventivaProgramadaComponent } from './components/manutencao-preventiva-programada/manutencao-preventiva-programada.component';
import { ManutencaoProgHomePageComponent } from './components/manutencao-prog-home-page/manutencao-prog-home-page.component';
import { IntervencaoAddUserHomePageComponent } from './components/intervencao-add-user-home-page/intervencao-add-user-home-page.component';
import { EditPermissaoComponent } from './components/edit-permissao/edit-permissao.component';
import { ListPermissaoComponent } from './components/list-permissao/list-permissao.component';

//import { AspNetUsersLoadComponent } from './asp-net-users-load/asp-net-users-load.component';
//import { TipoUtilizadorListComponent } from './components/tipo-utilizador-list/tipo-utilizador-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipListComponent,
    EquipAddComponent,
    GrupoMaquinaListComponent,
    EquipEditComponent,
    RegisterComponent,
    LoginComponent,
    AspNetUserListComponent,
    AspNetUserEditComponent,
    PedidoMcurativaListTesteComponent,
    PedidoMcurativaAddComponent,
    IntervencaoCurativaAddComponent,
    HeaderComponent,
    PedidoPreventivaListComponent,
    PedidoMpreventivaAddComponent,
    IntervencaoPreventivaAddComponent,
    ManutencaoPreventivaProgramadaComponent,
    ManutencaoProgHomePageComponent,
    IntervencaoAddUserHomePageComponent,
    EditPermissaoComponent,
    ListPermissaoComponent,
 
  ],
  entryComponents: [IntervencaoCurativaAddComponent, IntervencaoPreventivaAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule, 
    MatMenuModule, 
    MatSidenavModule
  ],

  providers: [AuthService] /*Aqui ficar AuthService ou RegisterService */,
  bootstrap: [AppComponent],
})
export class AppModule {}
