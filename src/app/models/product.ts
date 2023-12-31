export interface Product{
  id: number,
  name: string,
  description:string,
  rate: number,
  images: Array<string>,
  prices: Array<Price>,
  technicalDescription: TechnicalDescription,
  rating: Array<Rating>,
}

export interface TechnicalDescription {
  brand: string,
  model: string,
  color: string,
  material: string,
  width:  number;
  height:  number;
  length:  number;
  weight: number,
  warranty: number
}

export interface Price {
  type: string,
  value: number,
  installment?: number,
  interest?: boolean,
  discount?: number
}

export interface Rating {
  stars: number,
  message: string,
}

