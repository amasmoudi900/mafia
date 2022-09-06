import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) { }

  // user: firstName, lastName, email, pwd, ...
  signup(user) {
    return this.httpClient.post<{ message: string, user: any }>(`${this.userURL}/signup`, user);
  }

  // user : email, pwd
  login(obj) {
    return this.httpClient.post<{ message: string, user: any }>(`${this.userURL}/login`, obj);
  }

  displayProfile(id) {
    return this.httpClient.get(`${this.userURL}/${id}`);
  }

  editProfile(user) {
    return this.httpClient.put(`${this.userURL}/${user.id}`, user);
  }
}
