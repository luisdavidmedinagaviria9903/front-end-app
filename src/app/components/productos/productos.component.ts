import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServerService} from "../services/server.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit{
  products: Products[] = [];
  constructor(private router: Router,
              private serverService: ServerService){

  }

  ngOnInit(): void {
    this.serverService.getProducts()
      .subscribe({
        next: value => {
          if (value && value.length > 0){
            this.products = value;
          }
        },error: () => {
        }
      })

  }

}
export interface Products{
  id: number;
  title: string;
  specifications: string;
  price: number;
  image:string;
}
