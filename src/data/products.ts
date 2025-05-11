import { Product } from '@/types/interfaces/Product'

import jeans0 from '@/assets/calca.webp'
import jeans1 from '@/assets/jeans.jpg'
import jeans2 from '@/assets/jeans (1).jpg'
import moletom from '@/assets/moletom.jpg'
import bermuda from '@/assets/jeans (1).jpg'

export const products: Product[] = [
  {
    id: 'jeans-00',
    name: 'Jeans Slim',
    category: 'Calças',
    colors: ['Preto', 'Azul'],
    sizes: ['P', 'M', 'G'],
    img: jeans0,
  },
  {
    id: 'jeans-01',
    name: 'Jeans Cargo',
    category: 'Calças',
    colors: ['Branco', 'Preto'],
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    img: jeans1,
  },
  {
    id: 'jeans-02',
    name: 'Jeans Reta',
    category: 'Calças',
    colors: ['Azul'],
    sizes: ['M', 'G'],
    img: jeans2,
  },
  {
    id: 'moletom-00',
    name: 'Gola Polo',
    category: 'Moletons',
    colors: ['Verde', 'Branco'],
    sizes: ['P', 'M', 'G'],
    img: moletom,
  },
  {
    id: 'bermuda-00',
    name: 'Bermuda Jeans',
    category: 'Bermudas',
    colors: ['Azul'],
    sizes: ['P', 'M', 'G'],
    img: bermuda,
  },
]
