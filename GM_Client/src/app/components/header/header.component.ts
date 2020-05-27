import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

import { AuthService } from "../../TokenAuth/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, 
    private router: Router ) { }
  showFiller = false;
  opened: boolean;

  ngOnInit(): void {
  }

  onLogout() {
    
    this.authService.logout();
    this.router.navigate(['/']);
    
    setTimeout(() => 
    {
        
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.refresh();
    },
      3000);

  }

  refresh(): void {
    window.location.reload();
}

}
