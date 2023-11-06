import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "@components/modal/modal.component";
import { Basket } from "app/models/basket";
import { Cep, ShippingReturn, ShippingRequisition } from "app/models/cep";
import { Product } from "app/models/product";
import { ShippingService } from "app/services/shipping.service";
import { environment } from "environments/environment";
import { elementAt } from "rxjs";


@Component({
  selector: "app-calculate-shipping",
  templateUrl: "./calculate-shipping.component.html",
  styleUrls: ["./calculate-shipping.component.css"]
})
export class CalculateShippingComponent implements OnInit, OnChanges{
  
  @Input() basket? : Basket;
  products? :{
    product: Product,
    quantity: number,
  }[];

  formData : ShippingRequisition = new ShippingRequisition("",0,0,0,0);

  dataRetuned: ShippingReturn | null = null;

  sedexPrice: number = 0;
  pacPrice: number = 0;
  sedexDeliveryTime: number =0;
  pacDeliveryTime: number = 0;

  cepData: Cep | null = null;

  isLoading: boolean = false;

  constructor(private shippingService: ShippingService, public dialog: MatDialog) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.products = this.basket?.products
    if(this.formData.destinationZipCode.length == 8 ){
      this.processarDados();
    }
  }


  ngOnInit(): void {
    this.products = this.basket?.products
  }

  

  openDialog(valorRecebido: number) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { valorRecebido }
    });
  }

  processarDados() {
    this.isLoading = true;
    this.shippingService.getCep(this.formData.destinationZipCode).subscribe(returnData => {this.cepData = returnData;
      if(this.products){
        this.products.forEach(element => {
          this.prepareData(element.product);
          this.calculatePrice(element.quantity);
        });
      }
      this.dataRetuned = null;
    });
  }
  

  private calculatePrice(quantity: number) {
    this.shippingService.getFrete(this.formData.originZipCode, this.formData.destinationZipCode, this.formData.weight, this.formData.height, this.formData.width, this.formData.length, this.formData.accessKey).subscribe(returnedData => {
      if (!this.dataRetuned) {
        console.log(returnedData)
        this.dataRetuned = returnedData;
        this.pacPrice = parseFloat(returnedData.pacPrice.replace(",",".")) * quantity;
        this.sedexPrice = parseFloat(returnedData.sedexPrice.replace(",",".")) * quantity;
        this.pacDeliveryTime = Number(returnedData.pacDeliveryTime);
        this.sedexDeliveryTime = Number(returnedData.sedexDeliveryTime);
      }else {
        this.sedexPrice += parseFloat(returnedData.sedexPrice.replace(",",".")) * quantity;
        this.pacPrice += parseFloat(returnedData.pacPrice.replace(",",".")) * quantity;
        if(this.pacDeliveryTime < Number(returnedData.pacDeliveryTime)){
          this.pacDeliveryTime = Number(returnedData.pacDeliveryTime);
        }
        if(this.pacDeliveryTime < Number(returnedData.sedexDeliveryTime)){
          this.sedexDeliveryTime = Number(returnedData.sedexDeliveryTime);
        }
      }
    }, error => {
      console.error("Erro na requisição do frete:", error);
    });
  }

  private prepareData(product: Product){
    this.formData.width = product.technicalDescription.width;
    this.formData.height = product.technicalDescription.height;
    this.formData.length = product.technicalDescription.length;
    this.formData.weight = product.technicalDescription.weight;
  }


}


