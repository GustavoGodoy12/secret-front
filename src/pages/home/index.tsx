import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useMemo } from 'react'

import SimpleSlider from '@/components/SimpleSlider'
import Filters from '@/components/Filters'
import CardCarousel from '@/components/CardCarousel'

import bannerImg from '@/assets/profilewallpaper1.png'
import { products } from '@/data/products'
import { filterProducts } from '@/utils/FilterProducts'

import { Geist, Geist_Mono } from 'next/font/google'
import * as S from './home.styles'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export default function HomePage() {
  // filtros aplicados
  const [cats, setCats]     = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [sizes, setSizes]   = useState<string[]>([])

  // seleção temporária
  const [dCats, setDCats]     = useState<string[]>([])
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

  const applyFilters = () => {
    setCats(dCats)
    setColors(dColors)
    setSizes(dSizes)
  }

  const clearAll = () => {
    setDCats([])
    setDColors([])
    setDSizes([])
    setCats([])
    setColors([])
    setSizes([])
  }

  const filtered = useMemo(
    () =>
      filterProducts(products, {
        categories: cats,
        colors,
        sizes,
      }),
    [cats, colors, sizes]
  )

  const grouped = useMemo(() => {
    const m = new Map<string, typeof filtered>()
    filtered.forEach((p) => {
      if (!m.has(p.category)) m.set(p.category, [])
      m.get(p.category)!.push(p)
    })
    return Array.from(m.entries())
  }, [filtered])

  return (
    <>
      <Head>
        <title>Catálogo</title>
      </Head>

      <S.Container className={`${geistSans.variable} ${geistMono.variable}`}>
        <S.ContentWrapper>
          <S.Main>
            <SimpleSlider src={bannerImg} alt="Banner" height={260} />

            {grouped.map(([category, items]) => (
              <section key={category}>
                <S.SectionTitle>{category}</S.SectionTitle>

                <S.ProductsGrid>
                  {items.map((p) => {
                    // Aqui garantimos que `raw` é sempre string, sem usar `any`
                    const raw =
                      'slug' in p && typeof (p as { slug: unknown }).slug === 'string'
                        ? (p as { slug: string }).slug
                        : p.name
                    const model = encodeURIComponent(raw)

                    return (
                      <Link
                        key={p.id}
                        href={`/home/images?category=${encodeURIComponent(
                          p.category
                        )}&model=${model}`}
                        aria-label={`Ver fotos de ${p.name}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <S.ProductCard role="button">
                          <Image
                            src={p.img}
                            alt={p.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="150px"
                          />
                          <span>{p.name}</span>
                        </S.ProductCard>
                      </Link>
                    )
                  })}
                </S.ProductsGrid>
              </section>
            ))}
          </S.Main>

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
        </S.ContentWrapper>
      </S.Container>

      <CardCarousel />
    </>
  )
}
