import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServerService} from "../services/server.service";

@Component({
  selector: 'app-gestion-de-servicios',
  templateUrl: './gestion-de-servicios.component.html',
  styleUrl: './gestion-de-servicios.component.css'
})
export class GestionDeServiciosComponent implements OnInit{
  services: Services[] = []
  constructor(private router: Router,
              private serverService: ServerService){

  }
  ngOnInit(): void {
    this.serverService.getServices()
      .subscribe({
        next: value => {
          if (value && value.length > 0){
            this.services = value;
          }
        },error: () => {
        }
      })

  }
}
export interface Services{
  id: number;
  description: string;
  state: string;
  cost: number;
}
