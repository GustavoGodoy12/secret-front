import { StaticImageData } from "next/image"

export interface Product {
  id: string
  name: string
  category: 'Calças' | 'Moletons' | 'Bermudas' | 'Acessórios'
  colors: Array<'Preto' | 'Branco' | 'Azul' | 'Verde' | 'Vermelho'>
  sizes: Array<'PP' | 'P' | 'M' | 'G' | 'GG'>
  img: StaticImageData   
}
