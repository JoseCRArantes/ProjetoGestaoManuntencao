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

@Injectable()
export class AuthGuard implements CanActivate {
  dict = [ //mudar o nome: UserRoleMapping
    ["edit-permissao", UserRoles.Admin],
    ["edit-permissao", UserRoles.Membro],
    ["pedido-mcurativa-list-teste", UserRoles.Admin], 
    ["asp-net-user-list", UserRoles.Admin],
    ["grupomaquina-list", UserRoles.Admin]
  ];

  constructor(private authService: AuthService, private router: Router) {}


  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log("Rota selecionada: ", route.url[0].path);

    var currentUserRole = this.authService.getCurrentUserRoleId(); 
    var hasAccess = false; //mudar para false

    console.log("USER ROLE:", currentUserRole);
    console.log( "HasAccess:", hasAccess);
    

    this.dict.forEach(function (value) {
      console.log(value[0], "tuplo ---- ", route.url[0].path, "path escolhido"  );
      if (value[0] == route.url[0].path) {
        if (value[1] == currentUserRole) 
        console.log("RoleID", value[1], "CurrentUserRoleID", currentUserRole);
        { 
          hasAccess = true;
        }
      }
    });

    const isAuth = this.authService.getIsAuth();
    if (!isAuth) {
      this.router.navigate(["/my-login"]);
    }
    if (!hasAccess) {
      this.router.navigate(["/"]);
    }

    return isAuth && hasAccess;
  }


}
