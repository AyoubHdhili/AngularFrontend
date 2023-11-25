import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint=`${environment.baseUrl}api/auth`;

  constructor(private http:HttpClient) { }
  Register(user:User){
    return this.http.post(`${this.endpoint}/register`,user);
  }
  Authenticate(user:User){
    return this.http.post<{token:string,user:User}>(`${this.endpoint}/authenticate`,user);
  }

  IsLoggedIn(){
    return !!localStorage.getItem('token');
  }
}
