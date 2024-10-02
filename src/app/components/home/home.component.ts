import {Component, OnInit} from '@angular/core';
import {showErrorPopUp, TITLE_ERROR} from "../utilities/alert";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  user!: User;
  constructor(private router: Router,) {
  }
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    console.log(user)
    if (!user){
      showErrorPopUp(TITLE_ERROR,'No estas autenticado!')
          .then(() => this.router.navigate(['login']))
    }else {
      this.user = JSON.parse(user);
      console.log(this.user)
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login'])
  }
}
export interface User{
  id: number;
  firstName: string;
  LastName: string;
  password:string;
  email:string;
}
