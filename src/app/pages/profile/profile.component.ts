import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthenticatorService } from 'app/services/authenticator.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{


  dataComponents!: string;
  constructor(private service: AuthenticatorService){

  }
  ngOnInit(): void {
    this.service.getCurrentUser().then((data) => console.log(data))
  }

  public changeComponent(component: string) {
    this.dataComponents = component;
  }

}
