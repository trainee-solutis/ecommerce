import { Component } from "@angular/core";
import { Cep, Shipping } from "app/models/cep";
import { ShippingService } from "app/services/shipping.service";


@Component({
  selector: "app-calculate-shipping",
  templateUrl: "./calculate-shipping.component.html",
  styleUrls: ["./calculate-shipping.component.css"]
})
export class CalculateShippingComponent {
  formData: any = {
    ceporigem: "41820020",
    cepdestino: "",
    peso:  200, //em gramas até 30kg
    altura:  20,
    largura:  20,
    comprimento:  20, // cm até 100cm
    suaChave: "5d19ccda5002fee70f27aaad232af7651107e098", //chave CEPCERTO
  };
  freteData: Shipping | null = null;
  cepData: Cep | null = null;
  isLoading: boolean = false;

  constructor(private shippingService: ShippingService) {

  }

  processarDados() {

    this.isLoading = true;

    const { ceporigem, cepdestino, peso, altura, largura, comprimento, suaChave } = this.formData;
    this.shippingService.getCep(cepdestino).subscribe(res => {
      this.cepData = res;
      this.shippingService.getFrete(ceporigem, cepdestino, peso, altura, largura, comprimento, suaChave).subscribe(data => {
        this.freteData = data;
      }, error => {
        console.error("Erro na requisição do frete:", error);
      });
    });
  }
}


