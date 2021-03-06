import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { AuthService } from "../../TokenAuth/auth.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

import { interval, Observable } from "rxjs";
import { map, share } from "rxjs/operators";
import { AlertaAboutComponent } from '../alerta-about/alerta-about.component';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone,
    public dialog:MatDialog
  ) {}

  user: any = localStorage.getItem("username");

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  userPermission = 0;

  userNow() {
    //this.user = this.authService.getUserName();
    return (this.user = this.authService.getUserName());
    //console.log(localStorage.getItem('username'));
  }

  ngOnInit() {
  
    this.userPermission = this.authService.getCurrentUserRoleId();
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
    this.ngZone.run(() => this.router.navigateByUrl("/"));

    setTimeout(() => {
      this.refresh();
    }, 10);
  }

  refresh(): void {
    window.location.reload();
  }
  showInfo()
  {
    this.dialog.open(AlertaAboutComponent);
  }
}
