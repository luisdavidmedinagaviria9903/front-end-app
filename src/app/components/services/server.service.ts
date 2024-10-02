import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private  url: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getUser(email: string, password: string):Observable<any>{
    return this.http.get<any>(this.url + 'users?email=' + email + "&password=" + password);
  }
}
