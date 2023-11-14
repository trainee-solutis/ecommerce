import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
      newPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8)])],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: this.passwordMatching
    });

  }

  passwordMatching(formGroup: FormGroup){
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (newPassword !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ notMatching: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  changePassword(){
    this.submitted = true;
    console.log('change password', this.passwordForm.value)
  };

}

