import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "../app/TokenAuth/auth.guard";

import { EquipListComponent } from "./components/equipamento-list/equip-list.component";
import { GrupoMaquinaListComponent } from "./components/grupomaquina-list/grupomaquina-list.component";
import { EquipAddComponent } from "./components/equipamento-add/equip-add.component";
import { EquipEditComponent } from "./components/equipamento-edit/equip-edit.component";
import { RegisterComponent } from "./components/register-add/register-add.component";
import { LoginComponent } from "./Login-logout/logincomponent";
import { AspNetUserListComponent } from "./components/asp-net-user-list/asp-net-user-list.component";
import { AspNetUserEditComponent } from "./components/asp-net-user-edit/asp-net-user-edit.component";
import { PedidoMcurativaListTesteComponent } from "./components/pedido-mcurativa-list/pedido-mcurativa-list-teste.component";
import { PedidoMcurativaAddComponent } from "./components/pedido-mcurativa-add/pedido-mcurativa-add.component";
import { IntervencaoCurativaAddComponent } from "./components/intervencao-curativa-add/intervencao-curativa-add.component";
import { PedidoPreventivaListComponent } from "./components/pedido-preventiva-list/pedido-preventiva-list.component";
import { PedidoMpreventivaAddComponent } from "./components/pedido-mpreventiva-add/pedido-mpreventiva-add.component";
import { IntervencaoPreventivaAddComponent } from "./components/intervencao-preventiva-add/intervencao-preventiva-add.component";
import { ManutencaoPreventivaProgramadaComponent} from "./components/manutencao-preventiva-programada/manutencao-preventiva-programada.component";
import {ManutencaoProgHomePageComponent } from "./components/manutencao-prog-home-page/manutencao-prog-home-page.component";
import {ListPermissaoComponent} from "./components/list-permissao/list-permissao.component";
import {EditPermissaoComponent } from "./components/edit-permissao/edit-permissao.component";

import { audit } from 'rxjs/operators';
const routes: Routes = [
  {
    path: "edit-equip/:id",
    component: EquipEditComponent,
    canActivate: [AuthGuard],
  },

  {
    path: "equip-list",
    component: EquipListComponent,
    canActivate: [AuthGuard],
  },
  { path: "add-equip", component: EquipAddComponent, canActivate: [AuthGuard] },
  {
    path: "grupomaquina-list",
    component: GrupoMaquinaListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "add-register",
    component: RegisterComponent,
    canActivate: [AuthGuard],
  },
  { path: "my-login", component: LoginComponent },
  {
    path: "asp-net-user-list",
    component: AspNetUserListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "asp-net-user-edit/:id",
    component: AspNetUserEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pedido-mcurativa-list-teste",
    component: PedidoMcurativaListTesteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pedido-mcurativa-add",
    component: PedidoMcurativaAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "intervencao-curativa-add",
    component: IntervencaoCurativaAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "intervencao-preventiva-add",
    component: IntervencaoPreventivaAddComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "pedido-mpreventiva-add",
    component : PedidoMpreventivaAddComponent,
    canActivate:[AuthGuard],
  },
  {
    path: "pedido-preventiva-list",
    component: PedidoPreventivaListComponent,
    canActivate: [AuthGuard],
  },
  {
    path:"manutencao-preventiva-programada", 
    component: ManutencaoPreventivaProgramadaComponent,
    canActivate:[AuthGuard],
  }, 
  {
    path:"manutencao-prog-home-page",
    component: ManutencaoProgHomePageComponent,
    canActivate:[AuthGuard],
  },
  {
    path:"list-permissao",
    component:ListPermissaoComponent, 
    canActivate:[AuthGuard],
  },
  {
    path:"edit-permissao/:id",
    component: EditPermissaoComponent,
    canActivate:[AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
