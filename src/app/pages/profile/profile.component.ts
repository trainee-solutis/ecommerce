import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AuthenticatorService } from 'app/services/authenticator.service';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{

  dataComponents!: string;
  constructor(private service: AuthenticatorService, private userService: UserService){

  }
  ngOnInit(): void {
    this.userService.getCurrentUser().then((data) => console.log(data))
  }

  public changeComponent(component: string) {
    this.dataComponents = component;
  }

}
