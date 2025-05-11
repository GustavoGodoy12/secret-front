import styled from 'styled-components'
import Button from '@/components/Button'


export const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 460px;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 5%,
      rgba(0, 0, 0, 0) 100%
    );
    pointer-events: none;
  }
`


export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;    
  justify-content: center;
  pointer-events: none;
`


export const AvatarWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fff;    
  pointer-events: auto;

  img {
    object-fit: cover;
  }
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.2;
  pointer-events: auto;
`

export const CTAButton = styled(Button)`
  width: auto;
  pointer-events: auto;
  padding: 0.75rem 2rem;
  background: #ffffff;
  color: #000000;
  border-radius: 4px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`
