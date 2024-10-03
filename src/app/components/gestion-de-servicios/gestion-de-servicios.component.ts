import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServerService} from "../services/server.service";
import {showSuccessPopUp, TITLE_SUCCESS} from "../utilities/alert";

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
    this.getServices();

  }

  turnService(service: Services) {
    service.state = service.state == 'En espera' ? 'Pendiente' : 'En espera';
    this.serverService.updateService(service)
      .subscribe(() => {
        showSuccessPopUp(TITLE_SUCCESS,'Servicio apagado correctamente!');
        this.getServices()
      })
  }

  deleteService(service: Services){
    this.serverService.deleteService(service.id)
      .subscribe(() => {
        showSuccessPopUp(TITLE_SUCCESS,'Servicio eliminado correctamente!');
        this.getServices()
      })

  }

  private getServices(){
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
