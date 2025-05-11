
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

import Filters from '@/components/Filters'

import {
  Container,
  ContentWrapper,
  Breadcrumb,
  Crumb,
  MainPlaceholder,
  SmallRow,
  SmallPlaceholder,
  BottomPlaceholder,
} from './styles'


const CATEGORIES = ['Calças', 'Bermudas', 'Moletons']
const COLORS     = ['Preto', 'Branco', 'Azul', 'Verde', 'Vermelho']
const SIZES      = ['PP', 'P', 'M', 'G', 'GG']

export default function ImagesPage() {
  const router = useRouter()
  const model  = (router.query.model as string) || 'produto'


  const [cats,   setCats]   = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [sizes,  setSizes]  = useState<string[]>([])

  const [dCats,   setDCats]   = useState<string[]>([])
  const [dColors, setDColors] = useState<string[]>([])
  const [dSizes,  setDSizes]  = useState<string[]>([])

  const toggle = (
    arr: string[],
    value: string,
    setter: (v: string[]) => void
  ) => setter(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value])

  const applyFilters = () => {
    setCats(dCats)
    setColors(dColors)
    setSizes(dSizes)
  }

  const clearAll = () => {
    setDCats([]); setDColors([]); setDSizes([])
    setCats([]);  setColors([]);  setSizes([])
  }


  return (
    <Container>
      <ContentWrapper>
       
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
       
          <Breadcrumb>
            <Crumb>
              <Link href="/home" aria-label="Ir para a Home">home</Link>
            </Crumb>
            <span>{'>'}</span>
            <Crumb>
              <Link href="/home" aria-label="Voltar para a lista de fotos">fotos dos produtos</Link>
            </Crumb>
            <span>{'>'}</span>
            <Crumb bold>{model}</Crumb>
          </Breadcrumb>

       
          <MainPlaceholder />

          <SmallRow>
            <SmallPlaceholder />
            <SmallPlaceholder />
          </SmallRow>

          <SmallRow>
            <SmallPlaceholder />
            <SmallPlaceholder />
          </SmallRow>

          <BottomPlaceholder />
        </main>

       
        <Filters
          categories={dCats}
          colors={dColors}
          sizes={dSizes}
          onToggleCategory={(c) => toggle(dCats, c, setDCats)}
          onToggleColor={(c) => toggle(dColors, c, setDColors)}
          onToggleSize={(s) => toggle(dSizes, s, setDSizes)}
          onApply={applyFilters}
          onClear={clearAll}
        />
      </ContentWrapper>
    </Container>
  )
}
