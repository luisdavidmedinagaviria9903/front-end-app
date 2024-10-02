import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ServerService} from "../services/server.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {showErrorPopUp, showSuccessPopUp, TITLE_ERROR, TITLE_SUCCESS} from "../utilities/alert";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    form!: FormGroup;
    signupForm!: FormGroup;

  constructor(private router: Router,
              private serverService: ServerService,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
    })
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required]
    })
  }

  sigUp() {
    console.log("signup")
    let contenedor_login_registar= document.getElementById("contenedor__login-registar");
    let formulario_login= document.getElementById("formulario__login");
    let formulario_register= document.getElementById("formulario_register");
    let caja_trasera_login= document.getElementById("caja__trasera-login");
    let caja_trasera_register= document.getElementById("caja__trasera-register");
    formulario_register!.style.display= "block";
    contenedor_login_registar!.style.left= "410px";
    formulario_login!.style.display="none";
    caja_trasera_register!.style.opacity="0";
    caja_trasera_login!.style.opacity="1"
  }

  login() {
    let contenedor_login_registar= document.getElementById("contenedor__login-registar");
    let formulario_login= document.getElementById("formulario__login");
    let formulario_register= document.getElementById("formulario_register");
    let caja_trasera_login= document.getElementById("caja__trasera-login");
    let caja_trasera_register= document.getElementById("caja__trasera-register");
    if (window.innerWidth> 850){
      formulario_register!.style.display= "none";
      contenedor_login_registar!.style.left= "10px";
      formulario_login!.style.display="block";
      caja_trasera_register!.style.opacity="1";
      caja_trasera_login!.style.opacity="0";}
    else{

      formulario_register!.style.display= "none";
      contenedor_login_registar!.style.left= "0px";
      formulario_login!.style.display="block";
      caja_trasera_register!.style.display="block";
      caja_trasera_login!.style.display="none";

    }
  }

  loginUser() {
    this.serverService.getUser(this.form.get('email')?.value,
        this.form.get('password')?.value)
        .subscribe({
            next: value => {
              if (value && value.length > 0){
                showSuccessPopUp(TITLE_SUCCESS,'Login exitoso!')
                    .then(() => this.router.navigate(['home']))
                localStorage.setItem("user", JSON.stringify(value.at(0)));
              }else {
                showErrorPopUp(TITLE_ERROR,'Usuario No Encontrado!');
              }


            },error: () => {
              alert("Usuario No Encontrado!")
            }
        })


  }

  signUpUser() {
    let user : User = {
      id:Math.floor(Math.random() * 1000000),
      firstName: this.signupForm.get('firstName')?.value,
      LastName: "",
      email: this.signupForm.get('email')?.value,
      password:  this.signupForm.get('password')?.value,
    }
    this.serverService.saveUser(user).subscribe({
      next: value => {
        localStorage.setItem("user", JSON.stringify(value));
        showSuccessPopUp(TITLE_SUCCESS,'Usuario registrado correctamente!')
            .then(() => {
              this.router.navigate(['home'])
        })
      }
    })
  }
}
export interface User{
  id: number;
  firstName: string;
  LastName: string;
  password:string;
  email:string;
}
