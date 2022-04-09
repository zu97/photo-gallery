import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { LoginUserData, RegisterUserData, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) {}

  registerUser(userData: RegisterUserData) {
    const formData = new FormData();
    Object.keys(userData).forEach((data) => {
      formData.append(data, userData[data]);
    });

    return this.http.post<User>(env.apiUrl + '/users', formData);
  }

  loginUser(userData: LoginUserData) {
    return this.http.post<User>(env.apiUrl + '/users/sessions', userData);
  }

  logoutUser() {
    return this.http.delete(env.apiUrl + '/users/sessions');
  }

}