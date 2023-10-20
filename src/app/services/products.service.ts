import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "app/models/product";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private api_url = environment.api_url;

  constructor(private http: HttpClient) {}

  ngOnInit() {}


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api_url}/products`);
  }

}
