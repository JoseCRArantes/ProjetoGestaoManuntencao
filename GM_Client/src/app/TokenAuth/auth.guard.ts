import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRoles } from "./../shared/Constantes/userRoles";
import { AuthService } from "./auth.service";
import { AlertaPermissaoComponent } from "../components/alerta-permissao/alerta-permissao.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable()
export class AuthGuard implements CanActivate {
  /*
      Admin = 1,
    Utilizador = 2, funcionario de manutencao
    Convidado = 3, apenas acesso para listar equipamentos e pedir assistencia
  */

  //mudar o nome: UserRoleMapping
  dict = [
    ["list-permissao", UserRoles.Admin],
    ["edit-permissao", UserRoles.Admin],
    ["edit-permissao/:id", UserRoles.Admin],
    ["asp-net-user-list", UserRoles.Admin],
    ["asp-net-user-edit/:id", UserRoles.Admin],
    ["add-register", UserRoles.Admin],
    ["pedido-mcurativa-list-teste", UserRoles.Admin],
    ["pedido-mcurativa-list-teste", UserRoles.Convidado],
    ["pedido-mcurativa-list-teste", UserRoles.Utilizador],
    ["pedido-mcurativa-add", UserRoles.Admin],
    ["pedido-mcurativa-add", UserRoles.Convidado],
    ["pedido-mcurativa-add", UserRoles.Utilizador],
    ["intervencao-curativa-add", UserRoles.Admin],
    ["intervencao-curativa-add", UserRoles.Utilizador],
    ["intervencao-preventiva-add", UserRoles.Admin],
    ["intervencao-preventiva-add", UserRoles.Utilizador],
    ["pedido-mpreventiva-add", UserRoles.Admin],
    ["pedido-mpreventiva-add", UserRoles.Utilizador],
    ["pedido-mpreventiva-add", UserRoles.Convidado],
    ["pedido-preventiva-list", UserRoles.Admin],
    ["pedido-preventiva-list", UserRoles.Utilizador],
    ["pedido-preventiva-list", UserRoles.Convidado],
    ["grupomaquina-list", UserRoles.Admin],
    ["grupomaquina-list", UserRoles.Utilizador],
    ["grupomaquina-list", UserRoles.Convidado],
    ["edit-equip/:id", UserRoles.Admin],
    ["equip-list", UserRoles.Admin],
    ["equip-list", UserRoles.Convidado],
    ["equip-list", UserRoles.Utilizador],
    ["add-equip", UserRoles.Admin],
    ["manutencao-preventiva-programada", UserRoles.Admin],
    ["manutencao-prog-home-page", UserRoles.Utilizador],
    ["manutencao-prog-home-page", UserRoles.Admin],
    ["alerta-permissao", UserRoles.Admin],
    ["alerta-permissao", UserRoles.Utilizador],
    ["alerta-permissao", UserRoles.Convidado],
  ];

  /*
   path: "my-login"
  */

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    var currentUserRole = this.authService.getCurrentUserRoleId();
    var hasAccess = false;

    this.dict.forEach(function (value) {
      if (value[0] === route.url[0].path) {
        //value[1] == currentUserRole
        if (value[1] == localStorage.getItem("roleId")) {
          hasAccess = true;
        }
      }
    });

    const isAuth = this.authService.getIsAuth();
    if (!isAuth) {
      this.router.navigate(["/my-login"]);
    }
    if (!hasAccess) {
      this.dialog.open(AlertaPermissaoComponent);
    }
    return isAuth && hasAccess;
  }
}
