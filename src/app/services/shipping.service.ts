import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cep, ShippingReturn } from "app/models/cep";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ShippingService {
  private apiUrlFrete = "https://www.cepcerto.com/ws/json-frete/";
  private apiUrlCep = "//viacep.com.br/ws";

  constructor(private http: HttpClient) { }

  getFrete(originZipCode: string, destinationZipCode: string, weight: number, height: number, width: number, length: number, accessKey: string): Observable<ShippingReturn> {
    const url = `${this.apiUrlFrete}${originZipCode}/${destinationZipCode}/${weight}/${height}/${width}/${length}/${accessKey}`;
    return this.http.get<ShippingReturn>(url);
  }

  getCep(cep: string): Observable<Cep> {
    const url = `${this.apiUrlCep}/${cep}/json/`;
    return this.http.get<Cep>(url);
  }
}
