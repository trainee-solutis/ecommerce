import { Form, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit{

  constructor(private formBuilder :  FormBuilder){}
  formulario!: FormGroup

  hide = true;
  FormBuilder: any;

  ngOnInit(): void {
      this.formulario = this.formBuilder.group({
        nome : [null, [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)*$")]],
        sobrenome: [null, [Validators.required, Validators.minLength(3)]],
        nascimento: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        senha: [null,[Validators.required, Validators.minLength(6)]],
        confirmSenha: [null,Validators.required]
      }, {
        validators: this.passwordMatchValidator
      });
    }

  passwordMatchValidator(formGroup: FormGroup) {
    const senha = formGroup.get('senha')?.value;
    const confirmSenha = formGroup.get('confirmSenha')?.value;

    if (senha !== confirmSenha) {
      formGroup.get('confirmSenha')?.setErrors({ notMatching: true });
    } else {
      formGroup.get('confirmSenha')?.setErrors(null);
    }
  }


  onSubmit(){
    console.log(this.formulario)
  }


}


