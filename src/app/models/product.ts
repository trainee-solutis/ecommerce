

export interface Product{
    id: number,
    name: string,
    description:string,
    rate: number,
    image: string,
    price: number,
    discount?: number,
    tecnicalDescription: TecnicalDescription
}

export interface TecnicalDescription{
    brand: string,
    model: string,
    color: string,
    material: string,
    dimensions: string,
    weight: string,
    warranty: number
}