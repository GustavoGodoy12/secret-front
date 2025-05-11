import { Product } from '@/types/interfaces/Product'

type Filters = {
  categories?: string[]   
  colors?: string[]       
  sizes?: string[]        
}

export function filterProducts(produtos: Product[], filtros: Filters) {
  return produtos.filter((p) => {
    const byCategory = filtros.categories?.length
      ? filtros.categories.includes(p.category)
      : true

    const byColor = filtros.colors?.length
      ? p.colors.some((c) => filtros.colors!.includes(c))
      : true

    const bySize = filtros.sizes?.length
      ? p.sizes.some((s) => filtros.sizes!.includes(s))
      : true

    return byCategory && byColor && bySize
  })
}
