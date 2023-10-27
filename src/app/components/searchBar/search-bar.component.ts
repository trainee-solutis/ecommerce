import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'app/models/product';
import { ProductsService } from 'app/services/products.service';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  texto: string = '';
  searchTerm: string = '';

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      const nomeUsuario = localStorage.getItem('nomeDoUsuario');
      this.texto = `Bem vindo de volta, ${nomeUsuario}, o que procura hoje?`;
    } else {
      this.texto = 'Caro cliente, o que procura hoje?';
    }

    this.searchTerm = '';
  }

  formatter = (produto?: Product) => produto?.name || '';

  search = (text$: Observable<string>): Observable<readonly Product[]> =>
    text$.pipe(
      distinctUntilChanged(),
      filter((term: string) => term.length >= 3),
      switchMap((term: string) => this.productsService.getProductByName(term))
    );

  goToProductPage(product: any): void {
    try {
      this.router.navigate([`/product/${product.id}`]);
    } catch (error) {}
  }
}
