import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
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
export class CalculateShippingComponent implements OnChanges{
  
  @Input() basket? : Basket;
  products? :{
    product: Product,
    quantity: number,
  }[];

  @Input() product? : Product;

  formData : ShippingRequisition = new ShippingRequisition("",0,0,0,0);

  dataRetuned: ShippingReturn | null = null;

  sedexPrice: number = 0;
  pacPrice: number = 0;
  sedexDeliveryTime: number = 0;
  pacDeliveryTime: number = 0;

  cepData: Cep | null = null;

  isLoading: boolean = false;

  constructor(private shippingService: ShippingService, public dialog: MatDialog) {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setInitialPrarams();
    if(this.formData.destinationZipCode.length == 8 ){
      this.refreshData();
    }
  }
  
  
  openDialog(valorRecebido: number) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { valorRecebido }
    });
  }

  refreshData() {
    this.isLoading = true;
    this.shippingService.getCep(this.formData.destinationZipCode).subscribe(returnData => {this.cepData = returnData;
      if(this.products){
        this.products.forEach(element => {
          this.prepareData(element.product);
          this.calculatePrice(element.product.name,element.quantity);
        });
      }
      this.dataRetuned = null;
    });
  }
  
  private calculatePrice(productName : string, quantity: number) {
    this.shippingService.getFrete(this.formData.originZipCode, this.formData.destinationZipCode, this.formData.weight, this.formData.height, this.formData.width, this.formData.length, this.formData.accessKey).subscribe(returnedData => {
      if(this.isShippingReturn(returnedData)){
        if (!this.dataRetuned) {
          this.assignShippingInfo(returnedData, quantity);
        }else {
          this.addShippingInfo(returnedData, quantity);
        }
      }else{
        alert(returnedData.msg + "\n Produto: " + productName);
        console.error(returnedData)
        this.isLoading = false
      }
    }, error => {
      console.error("Erro na requisição do frete:", error);
    });
  }

  private assignShippingInfo(returnedData: ShippingReturn, quantity: number) {
    this.dataRetuned = returnedData;
    this.pacPrice = this.parseStringTofloat(returnedData.valorpac) * quantity;
    this.sedexPrice = this.parseStringTofloat(returnedData.valorsedex) * quantity;
    this.pacDeliveryTime = Number(returnedData.prazopac);
    this.sedexDeliveryTime = Number(returnedData.prazosedex);
  }
  
  private addShippingInfo(returnedData: ShippingReturn, quantity: number) {
    this.sedexPrice += this.parseStringTofloat(returnedData.valorsedex) * quantity;
    this.pacPrice += this.parseStringTofloat(returnedData.valorpac) * quantity;
    if (this.pacDeliveryTime < Number(returnedData.prazopac)) {
      this.pacDeliveryTime = Number(returnedData.prazopac);
    }
    if (this.pacDeliveryTime < Number(returnedData.prazosedex)) {
      this.sedexDeliveryTime = Number(returnedData.prazosedex);
    }
  }

  private prepareData(product: Product){
    this.formData.width = product.technicalDescription.width;
    this.formData.height = product.technicalDescription.height;
    this.formData.length = product.technicalDescription.length;
    this.formData.weight = product.technicalDescription.weight;
  }
  
  private setInitialPrarams() {
    if (this.basket) {
      this.products = this.basket?.products;
    }
    if (this.product) {
      this.products = new Array();
      const data = {
        product: this.product,
        quantity: 1
      };
      this.products.push(data);
    }
  }

  private isShippingReturn(data: any): data is ShippingReturn {
    const keys: string[] = Object.keys(data);
    const requiredKeys: (keyof ShippingReturn)[] = [
        'ceporigem',
        'cepdestino',
        'prazopac',
        'prazosedex',
        'valorpac',
        'valorsedex'
    ];
    return requiredKeys.every(key => keys.includes(key));
  }

  private parseStringTofloat(stringValue : string) {
    if(stringValue.includes(",")){
      return parseFloat(stringValue.replace(",", "."));
    }else{
      return parseFloat(stringValue);
    }
  }
  
}