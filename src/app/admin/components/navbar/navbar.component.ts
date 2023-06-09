import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usernameAuth: string = "";
  constructor(private httpService: LoginService, private router: Router){}

  ngOnInit(): void {
    this.usernameAuth = this.httpService.getUsernameAuthenticated();
  }

  logout(){
    setTimeout(() => {
      this.httpService.logout();
    }, 1000);
  }
}
