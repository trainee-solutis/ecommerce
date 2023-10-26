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

export interface Shipping{
  ceporigem: string;
  cepdestino: string;
  peso: number;
  altura: number;
  largura: number;
  comprimento: number;
  suaChave: string;
  prazopac: number;
  prazosedex: number;
  valorpac: number;
  valorsedex: number;
}
