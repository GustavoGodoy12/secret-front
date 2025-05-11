import { useRef, useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {
  CarouselWrapper,
  Title,
  Track,
  Card,
  Controls,
  NavButton,
  Arrow,
} from './styles'


export const mockCards = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
  color: '#535353', 
}))

export default function CardCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)


  const updateScrollState = () => {
    const track = trackRef.current
    if (!track) return
    const { scrollLeft, scrollWidth, clientWidth } = track
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth)
  }

  const scrollByCard = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const cardWidth = trackRef.current.firstElementChild?.clientWidth || 0
    const gap = 16 
    const delta = cardWidth + gap
    trackRef.current.scrollBy({
      left: dir === 'left' ? -delta : delta,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    updateScrollState()
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', updateScrollState)
    window.addEventListener('resize', updateScrollState)
    return () => {
      track.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  return (
    <CarouselWrapper>
      <Title>Explore os novos catálogos</Title>

      <Track ref={trackRef}>
        {mockCards.map((c) => (
          <Card key={c.id} $color={c.color}>
            {c.title}
          </Card>
        ))}
      </Track>

      <Controls>
        <NavButton
          $active={canScrollLeft}
          onClick={() => scrollByCard('left')}
          aria-label="Voltar"
        >
          <Arrow as={FaChevronLeft} />
        </NavButton>
        <NavButton
          $active={canScrollRight}
          onClick={() => scrollByCard('right')}
          aria-label="Avançar"
        >
          <Arrow as={FaChevronRight} />
        </NavButton>
      </Controls>
    </CarouselWrapper>
  )
}
