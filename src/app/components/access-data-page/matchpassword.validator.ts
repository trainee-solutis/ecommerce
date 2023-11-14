import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";


export const matchPassword : ValidatorFn = (control: AbstractControl) : ValidationErrors | null => {
  let newPassword = control.get('newPassword');
  let confirmPassword = control.get('confirmPassword');
  if (newPassword && confirmPassword && newPassword?.value !== confirmPassword?.value) {
    return {
      passwordMatchError : true
    }

  }
    return null;
}

