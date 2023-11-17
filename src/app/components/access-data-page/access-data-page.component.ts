import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-data-page',
  templateUrl: './access-data-page.component.html',
  styleUrls: ['./access-data-page.component.css']
})
export class AccessDataPageComponent implements OnInit {

  passwordForm!: FormGroup;
  submitted = false;
  successMessage = "";

  hideOldPassword = true;
  hideNewPassword = true;
  hideConfirmPassword = true;

  constructor(private formBuilder: FormBuilder, private router: Router){
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
  };

  changePassword(){
    if(this.submitted = true){
      alert("Senha alterada com sucesso!");
      window.location.reload();
    }
    // lógica de alterar a senha aqui
  };
}

