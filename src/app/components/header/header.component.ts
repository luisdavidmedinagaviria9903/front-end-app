import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{
  user!: User;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    console.log(user)
    if (user){
      this.user = JSON.parse(user);
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
