import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatorService } from 'app/services/authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder, private service: AuthenticatorService, private router: Router) { }
  formulario!: FormGroup;
  hide = true;
  FormBuilder: any;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(4)]]
    })
  }

  onSubmit() {
    console.log(this.formulario)
  }

  authenticator(){
    if(this.formulario.valid){
      const email = this.formulario.value.email;
      const password = this.formulario.value.senha;

      this.service.login(email,password).then(() => {
        alert("Login feito com sucesso");
        this.router.navigate(['/home'])
      }).catch((error) => {
        alert("Erro ao fazer login");
      });
    }
  }
}
