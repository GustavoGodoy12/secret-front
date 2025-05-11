import {
  Container,
  FiltersHeaderContainer,
  FiltersScroll,
  FooterButtons,
  CategoryGrid,
  CategoryItem,
  CategoryImg,
  CategoryCaption,
} from './styles'

import { FilterSection } from './FilterSection'
import { CleanFiltersButton } from './CleanFiltersButton'
import Button from '@/components/Button'


import type { StaticImageData } from 'next/image'
import calcaFilterImg   from '@/assets/calca-filter.png'
import bermudaFilterImg from '@/assets/bermuda-filter1.png'
import moletomFilterImg from '@/assets/moletom-filter.png'


const CATEGORIES = ['Calças', 'Bermudas', 'Moletons']
const CATEGORY_IMAGES: Record<string, StaticImageData> = {
  Calças:   calcaFilterImg,
  Bermudas: bermudaFilterImg,
  Moletons: moletomFilterImg,
}

const COLORS = ['Preto', 'Branco', 'Azul', 'Verde', 'Vermelho']
const SIZES  = ['PP', 'P', 'M', 'G', 'GG']

type Props = {
  categories: string[]
  colors: string[]
  sizes: string[]
  onToggleCategory: (c: string) => void
  onToggleColor: (c: string) => void
  onToggleSize: (s: string) => void
  onApply: () => void
  onClear: () => void
}

export default function Filters({
  categories,
  colors,
  sizes,
  onToggleCategory,
  onToggleColor,
  onToggleSize,
  onApply,
  onClear,
}: Props) {
  const hasActive = categories.length || colors.length || sizes.length

  const Checkbox = ({
    checked,
    onChange,
  }: {
    checked: boolean
    onChange: () => void
  }) => (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={{ width: 18, height: 18, margin: 0, cursor: 'pointer' }}
    />
  )

  return (
    <Container>
      
      <FiltersHeaderContainer>
        <h3>filtros</h3>
      </FiltersHeaderContainer>

      
      <FiltersScroll>
        
        <FilterSection title="Categoria" isActive>
          <CategoryGrid>
            {CATEGORIES.map((c) => {
              const checked = categories.includes(c)

              return (
                <CategoryItem key={c} $checked={checked}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleCategory(c)}
                  />
                  <CategoryImg
                    src={CATEGORY_IMAGES[c]}
                    alt={c}
                    draggable={false}
                    sizes="64px"
                  />
                  <CategoryCaption>{c}</CategoryCaption>
                </CategoryItem>
              )
            })}
          </CategoryGrid>
        </FilterSection>

        
        <FilterSection title="Tamanho" isActive>
          {SIZES.map((s) => (
            <label key={s}>
              <Checkbox
                checked={sizes.includes(s)}
                onChange={() => onToggleSize(s)}
              />{' '}
              {s}
            </label>
          ))}
        </FilterSection>

        
        <FilterSection title="Cor" isActive>
          {COLORS.map((c) => (
            <label key={c}>
              <Checkbox
                checked={colors.includes(c)}
                onChange={() => onToggleColor(c)}
              />{' '}
              {c}
            </label>
          ))}
        </FilterSection>
      </FiltersScroll>

      
      <FooterButtons>
        <Button onClick={onApply}>Aplicar filtros</Button>
        <CleanFiltersButton
          active={hasActive}
          onClick={onClear}
          style={{ marginTop: '50px' }}
        />
      </FooterButtons>
    </Container>
  )
}
