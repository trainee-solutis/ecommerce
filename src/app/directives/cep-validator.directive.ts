import { Directive } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, map } from "rxjs";
import { ShippingService } from "app/services/shipping.service";

@Directive({
  selector: "[validadorCep]",
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: CepValidatorDirective,
    multi: true,
  }]
})
export class CepValidatorDirective implements AsyncValidator{

  constructor( private shippingService : ShippingService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = control.value;

    return this.shippingService.getCep(cep).pipe(map(
      (resultado:any)=> resultado.erro ? { "validadorCep" :  true} : null
    ));
  }
}
