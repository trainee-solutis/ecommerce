export interface Product{
  id: number,
  name: string,
  description:string,
  rate: number,
  image: string,
  prices: Array<Price>,
  technicalDescription: TechnicalDescription,
  rating: Array<Rating>,
}

export interface TechnicalDescription {
  brand: string,
  model: string,
  color: string,
  material: string,
  dimensions: string,
  weight: string,
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
