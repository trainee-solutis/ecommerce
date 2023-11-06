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

  getFrete(ceporigem: string, cepdestino: string, peso: number, altura: number, largura: number, comprimento: number, suaChave: string): Observable<ShippingReturn> {
    const url = `${this.apiUrlFrete}${ceporigem}/${cepdestino}/${peso}/${altura}/${largura}/${comprimento}/${suaChave}`;
    return this.http.get<ShippingReturn>(url);
  }

  getCep(cep: string): Observable<Cep> {
    const url = `${this.apiUrlCep}/${cep}/json/`;
    return this.http.get<Cep>(url);
  }
}
