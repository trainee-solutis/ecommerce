export interface Product{
  id: number,
  name: string,
  description:string,
  rate: number,
  image: string,
  price: number,
  discount?: number,
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
