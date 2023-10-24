export interface Product{
  id: number,
  name: string,
  description:string,
  rate: number,
  image: string,
  prices: Array<Price>,
  technicalDescription: TechnicalDescription
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
}
