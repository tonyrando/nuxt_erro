export interface Address {
  id?: number
  logradouro: string
  logradouroTipo: string
  number?: string
  complemento?: string
  referencia?: string
  cep?: string
  bairro?: string
  cidade?: string
  uf?: string
  pais?: string
}