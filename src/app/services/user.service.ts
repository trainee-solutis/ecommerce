import { User } from './../models/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_url = environment.api_url;
  private apiToken = environment.api_token_railway;

  private headers = new HttpHeaders({'Authorization': `Bearer ${this.apiToken}`});
  private options = { headers: this.headers };
  constructor(private http: HttpClient) { }


  getUser(userId: any): Observable<User>{
    return this.http.get<User>(`${this.api_url}/users/${userId}`)
  }

  putUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.api_url}/users/${user.id}`, user, this.options)
  }

}
