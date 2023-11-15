import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from 'environments/environment';
import { jwtDecrypt, jwtVerify} from 'jose';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {
  private apiUrl = 'https://expressjs-prisma-production-0659.up.railway.app/';
  private apiToken = "c29sdXRpcw==";
  constructor(private http: HttpClient, private router: Router) { }

  async login(email: string, password: string){
    const headers = new HttpHeaders({'Authorization': `Bearer ${this.apiToken}`});
    const options = { headers: headers };
    const url = this.apiUrl + "login";
    const body = {email, password};
    try{
      await this.http.post(url,body, options).toPromise().then((data: any) => {
        localStorage.setItem('token', data.token);
        console.log(data);

      });
    }catch(error){
      console.log(error);
      throw error;
    }
  }

  async isLogged(){
    const token = localStorage.getItem('token');
    if(token){
      const secretKey = new TextEncoder().encode(environment.jwt_secret);
      const verifiedToken = await jwtVerify(token, secretKey);
      return verifiedToken
    }
    localStorage.removeItem('token');
    return null;
  }

  async getCurrentUser(){
    const token = await this.isLogged();
      try {
        return token?.payload
      } catch (error) {
        console.error('Invalid token:', error);
      }
    return null;
  }

  logout(){
    localStorage.removeItem('token');
    location.reload();
  }

}
