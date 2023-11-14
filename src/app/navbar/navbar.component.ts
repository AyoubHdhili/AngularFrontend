import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isMenuOpened: boolean = false;
  constructor(private authService: AuthService) {
  }

  isLoggedIn(){
    return this.authService.IsLoggedIn();
  }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }

}
