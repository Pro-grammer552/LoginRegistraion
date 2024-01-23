import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:9095";

  constructor(private http: HttpClient) {}

  generateToken(credentials: any) {
    return this.http.post(`${this.url}/token`, credentials);
  }

  loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    return token !== undefined && token !== '' && token !== null;
  }


  




}
