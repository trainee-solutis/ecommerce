import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Observable } from 'rxjs';
import { Component,OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticatorService } from 'app/services/authenticator.service';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.css']
})
export class RegistrationDataComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  user!: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService,  private authService: AuthenticatorService) {}

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      name: ["", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)*$")
        ])],
      email: ["", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|br)$")
      ])],
      dateOfBirth: ["", Validators.compose([
        Validators.required,
        Validators.pattern("^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/([0-9]{2})$")
      ])],
      address: ''
    });
  }

  async ngAfterViewInit(): Promise<void> {
    const currentUser = await this.authService.getCurrentUser();
    this.form.patchValue({
      name: currentUser?.name,
        email: currentUser?.email,
        dateOfBirth: currentUser?.dateOfBirth,
    })
  }

  async onSubmit() {
    const currentUser = await this.authService.getCurrentUser();
    if (currentUser){
      const updatedUser: User = {id: currentUser.id, ...this.form.value};
      this.userService.putUser(updatedUser);
  }
    }
}
