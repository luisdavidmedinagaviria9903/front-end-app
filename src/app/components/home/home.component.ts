import {Component, OnInit} from '@angular/core';
import {showErrorPopUp, TITLE_ERROR} from "../utilities/alert";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private router: Router,) {
  }
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    console.log(user)
    if (!user){
      showErrorPopUp(TITLE_ERROR,'No estas autenticado!')
          .then(() => this.router.navigate(['login']))
    }
  }

}

