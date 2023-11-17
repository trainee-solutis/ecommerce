import { Injectable } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import * as jose from 'jose';
import { Basket } from 'app/models/basket';
import { environment } from 'environments/environment';
import { Token } from '@angular/compiler';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'app/models/user';
import { Observable, catchError } from 'rxjs';
import { AuthenticatorService } from '../authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://expressjs-prisma-production-0659.up.railway.app'; 
  private token = "c29sdXRpcw==";

  
  constructor(private httpClient: HttpClient, private autenticatorService: AuthenticatorService) { 

  }

  async getCurrentUser(){
    try {
      const user = await this.autenticatorService.getLoggedUser();
      if(user){
        console.log(user)
        return user
      }
      return null;
    } catch (error) {
      console.error('Invalid token:\n', error);
      return null;
    }
  }

  deleteUserById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    const options = { headers: headers };
    const url = `${this.apiUrl}/users/${id}`;

    return this.httpClient.delete<any>(url, options)
      .pipe(
        catchError((error) => {
          console.log('Erro na requisição:', error);
          throw error; // Propagar o erro para que o componente possa lidar com ele
        })
      )
    ;
  }

  createUser(user : {name: string, email: string, password: string, dateOfBirth: Date, address:string}): Observable<any>{
    const headers = new HttpHeaders({'Authorization': `Bearer ${this.token}`});
    const options = { headers: headers };
    const url = `${this.apiUrl}/users`;
    return this.httpClient.post(url, user, options)
      .pipe(
        catchError((error) => {
          console.log('Erro na requisição:', error);
          throw error; // Propagar o erro para que o componente possa lidar com ele
        })
      )
    ;
  }
  
  updateUser(id:number, userParams : {name: string, email: string, password: string, dateOfBirth: Date, address:string}): Observable<any>{
    const headers = new HttpHeaders({'Authorization': `Bearer ${this.token}`});
    const options = { headers: headers };
    const url = `${this.apiUrl}/users/${id}`;
    return this.httpClient.put(url, userParams, options)
      .pipe(
        catchError((error) => {
          console.log('Erro na requisição:', error);
          throw error; // Propagar o erro para que o componente possa lidar com ele
        })
      )
    ;
  }

}

