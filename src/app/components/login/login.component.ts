import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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
}
