import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { matchPassword } from './matchpassword.validator';

@Component({
  selector: 'app-access-data-page',
  templateUrl: './access-data-page.component.html',
  styleUrls: ['./access-data-page.component.css']
})
export class AccessDataPageComponent implements OnInit {

  passwordForm!: FormGroup;
  submitted = false;

  hideOldPassword = true;
  hideNewPassword = true;
  hideConfirmPassword = true;

  constructor(private formBuilder: FormBuilder){
  }

  ngOnInit(): void {

    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.passwordForm.setValidators(matchPassword);
  }


  changePassword(){
    this.submitted = true;
    console.log('change password', this.passwordForm.value)
  };

}

