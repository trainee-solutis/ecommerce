import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  texto: string = "";

  ngOnInit(): void {
    const token = localStorage.getItem("token");

    if (token) {
      const nomeUsuario = localStorage.getItem("nomeDoUsuario") ;
      this.texto = `Bem vindo de volta, ${nomeUsuario}, o que procura hoje?`;
    } else {
      this.texto = "Caro cliente, o que procura hoje?";
    }
  }
}
