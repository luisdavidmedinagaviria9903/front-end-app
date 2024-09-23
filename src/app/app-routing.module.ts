import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcercaDeNosotrosComponent} from "./components/acerca-de-nosotros/acerca-de-nosotros.component";
import {ContactComponent} from "./components/contact/contact.component";
import {GestionDeServiciosComponent} from "./components/gestion-de-servicios/gestion-de-servicios.component";
import {ProductosComponent} from "./components/productos/productos.component";
import {TestimoniosComponent} from "./components/testimonios/testimonios.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: 'acerca-de-nosotros',
    component: AcercaDeNosotrosComponent,
  },
  {
    path: 'contacto',
    component: ContactComponent,
  },
  {
    path: 'gestion-de-servicios',
    component: GestionDeServiciosComponent,
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'testimonios',
    component: TestimoniosComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
