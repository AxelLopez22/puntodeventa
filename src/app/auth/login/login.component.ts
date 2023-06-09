import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../models/models';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private spinner: NgxSpinnerService, private route: Router){
    this.loginForm = fb.group({
      NombreUsuario: ['', [Validators.required]],
      Contrasenia: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    
  }

  login(){
    this.spinner.show();
    let user: Login = {
      nombreUsuario: this.loginForm.get('NombreUsuario')?.value,
      contrasenia: this.loginForm.get('Contrasenia')?.value
    }

    localStorage.setItem("user-info", JSON.stringify(user.nombreUsuario));
    setTimeout(()=>{
      this.spinner.hide()
      this.route.navigate(['pcg/inicio']);
    },1500)

  }
}
