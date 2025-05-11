// src/pages/home/images/index.tsx

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

export default function ImagesPage() {
  const router = useRouter()
  const modelParam = router.query.model
  const model =
    Array.isArray(modelParam) && modelParam.length > 0
      ? modelParam[0]
      : typeof modelParam === 'string'
      ? modelParam
      : 'produto'

  // seleção temporária de filtros
  const [dCats, setDCats]   = useState<string[]>([])
  const [dColors, setDColors] = useState<string[]>([])
  const [dSizes, setDSizes]   = useState<string[]>([])

  const toggle = (
    arr: string[],
    value: string,
    setter: (v: string[]) => void
  ) =>
    setter(
      arr.includes(value)
        ? arr.filter((v) => v !== value)
        : [...arr, value]
    )

  // neste placeholder, o "apply" só fecha/mantém a seleção
  const applyFilters = () => {
    // se quiser, adicionar lógica de fetch aqui...
  }

  const clearAll = () => {
    setDCats([])
    setDColors([])
    setDSizes([])
  }

  return (
    <Container>
      <ContentWrapper>
        <main
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Breadcrumb>
            <Crumb>
              <Link href="/home" aria-label="Ir para a Home">
                home
              </Link>
            </Crumb>
            <span>&gt;</span>
            <Crumb>
              <Link
                href="/home"
                aria-label="Voltar para a lista de fotos"
              >
                fotos dos produtos
              </Link>
            </Crumb>
            <span>&gt;</span>
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
