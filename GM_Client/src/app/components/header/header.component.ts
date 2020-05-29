import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { AuthService } from "../../TokenAuth/auth.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}
  
  user :string;

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  userNow(){
    this.user = this.authService.getUserName();
    console.log(this.user);
  }

  ngOnInit() {
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
    }, 1000);
  }

  refresh(): void {
    window.location.reload();
  }
}
