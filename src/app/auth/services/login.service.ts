import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
  logout():void{
    localStorage.removeItem('user-info')
    this.router.navigate(['pcg/auth'])
  }

  isAuthenticated():boolean{
    // @ts-ignore
    return localStorage.getItem('user-info');
  }

  getUsernameAuthenticated():string{
    const user_info = JSON.parse(localStorage.getItem('user-info') || '{}' );
    return user_info;
  }
}
