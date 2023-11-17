import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticatorService } from 'app/services/authenticator.service';
import { environment } from 'environments/environment';
import { jwtDecrypt, jwtVerify} from 'jose';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  token: string;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthenticatorService) {
    this.token = this.activatedRoute.snapshot.params['token'];
   }

  ngOnInit(): void {
    this.checkToken();
    // this.name = this.authService.getCurrentUser()
  }

  async checkToken(){
    const secretKey = new TextEncoder().encode(environment.jwt_secret);
    const verifiedToken = await jwtVerify(this.token, secretKey);
  }

  async createAccount(){}

}
