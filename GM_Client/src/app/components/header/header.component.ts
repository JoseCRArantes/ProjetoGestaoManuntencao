import { Component, OnInit, NgZone } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { AuthService } from "../../TokenAuth/auth.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}
  
  showFiller = false;
  opened: boolean;

  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.userIsAuthenticated = isAuthenticated;
      });
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
