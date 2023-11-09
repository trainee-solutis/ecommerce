import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent{


  dataComponents!: string;


  public changeComponent(component: string) {
    this.dataComponents = component;
  }

}
