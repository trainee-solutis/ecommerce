import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-access-data-page',
  templateUrl: './access-data-page.component.html',
  styleUrls: ['./access-data-page.component.css']
})
export class AccessDataPageComponent {

  hide = true;
  hideOldPassword = true;
  hideNewPassword = true;
  hideConfirmPassword = true;


}
