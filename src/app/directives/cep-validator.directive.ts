import { Directive } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, map, of } from "rxjs";
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
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const cep = control.value;

    if (!cep || String(cep).length !== 8) {
      return of({ "invalidCepLength": true });
    }

    return this.shippingService.getCep(cep).pipe(
      map((resultado: any) => {
        return resultado.erro ? { "invalidCep": true } : null;
      }))


  }
}
