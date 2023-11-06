import { environment } from "environments/environment";

export interface Cep {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

export interface ShippingReturn{
  originZipCode: string;
  destinationZipCode: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  accessKey: string;
  pacDeliveryTime: string;
  sedexDeliveryTime: string;
  pacPrice: string;
  sedexPrice: string;
}

export class ShippingRequisition{
  originZipCode: string;
  destinationZipCode: string;
  weight:  number = 0; //em gramas até 30kg
  height:  number = 0;
  width:  number = 0;
  length:  number = 0; // cm até 100cm
  accessKey: string;
  
  constructor(destinationZipCode:string, weight: number, height: number, width:  number, length:  number) {
    this.originZipCode = "41820020";
    this.destinationZipCode = destinationZipCode;
    this.weight = weight;
    this.height = height;
    this.width = width;
    this.length = length;
    this.accessKey = environment.key_CEP
  }
}