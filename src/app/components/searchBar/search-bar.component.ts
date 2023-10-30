import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/models/product';
import { ProductsService } from 'app/services/products.service';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {

  texto: string = '';
  searchTerm!: string | Product;

  constructor(private productsService: ProductsService, private router: Router, private route: ActivatedRoute) {
    this.searchTerm = '';
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {
      const nomeUsuario = localStorage.getItem('nomeDoUsuario');
      this.texto = `Bem vindo de volta, ${nomeUsuario}, o que procura hoje?`;
    } else {
      this.texto = 'Caro cliente, o que procura hoje?';
    }
  }

  formatter = (product: Product) => product.name;

  search = (text$: Observable<string>): Observable<readonly Product[]> =>
  text$.pipe(
    distinctUntilChanged(),
    filter((term: string) => term.length === 3),
    switchMap((term: string) => {
      return this.productsService.getProductByName(term).pipe(
        map((products: Product[]) => products.slice(0, 10))
      );
    })
  );

  goToProductPage() {
    if (typeof this.searchTerm !== 'string' && this.searchTerm.id) {
      this.router.navigate([`/product/${this.searchTerm.id}`]);
    } else if (typeof this.searchTerm === 'string' && this.searchTerm.length >= 3) {
      this.productsService.getProductByName(this.searchTerm).subscribe((products) => {
        if (products.length > 0) {
          this.router.navigate([`/product/${products[0].id}`]);
        }
      });
    }
  }
}
