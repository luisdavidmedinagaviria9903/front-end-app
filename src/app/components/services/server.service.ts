import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Services} from "../gestion-de-servicios/gestion-de-servicios.component";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private  url: string = 'https://my-json-server.typicode.com/luisdavidmedinagaviria9903/front-end-app/';

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string):Observable<any>{
    return this.http.get<any>(this.url + 'users?email=' + email + "&password=" + password);
  }
  saveUser(params: any):Observable<any>{
    return this.http.post<any>(this.url + 'users', params);
  }
  getProducts():Observable<any>{
    return this.http.get<any>(this.url + 'products');
  }

  getServices():Observable<any>{
    return this.http.get<any>(this.url + 'services');
  }

  deleteService(id: number){
    return this.http.delete<any>(this.url + 'services/' + id);
  }
  updateService(service: Services){
    return this.http.put<any>(this.url + 'services/' + service.id, service);
  }

}
