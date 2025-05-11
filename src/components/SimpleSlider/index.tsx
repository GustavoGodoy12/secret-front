import Image, { StaticImageData } from 'next/image'
import {
  BannerWrapper,
  ImgWrapper,
  Overlay,
  AvatarWrapper,
  Title,
  CTAButton,
} from './styles'

import profilePic from '@/assets/eu.jpeg' 

type Props = {
  src: string | StaticImageData
  alt?: string
  height?: number | string
}

export default function SimpleSlider({ src, alt = '', height = 460 }: Props) {
  return (
    <BannerWrapper style={{ height }}>
      <ImgWrapper>
        <Image src={src} alt={alt} fill priority />
      </ImgWrapper>

      <Overlay>
        <AvatarWrapper>
          <Image src={profilePic} alt="Minha foto de perfil" fill />
        </AvatarWrapper>

        <Title>Explore o nosso catálogo</Title>
        <CTAButton>Ver Mais</CTAButton>
      </Overlay>
    </BannerWrapper>
  )
}
