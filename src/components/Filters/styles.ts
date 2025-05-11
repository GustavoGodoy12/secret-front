import styled, { css } from 'styled-components'
import { deviceSizes } from '@/styles/device-sizes'
import Image from 'next/image'

export const FILTER_WIDTH = 280 as const

export const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: ${FILTER_WIDTH}px;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;

  @media screen and (max-width: ${deviceSizes.medium}px) {
    display: none;
  }
`
export const FiltersScroll = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`
export const FooterButtons = styled.div`
  display: flex;
  flex-direction: column;
`
export const FiltersHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 10px 0 20px 0;

  h3 {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-size: 10px;
  }
`


export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 0.5rem;
  justify-items: center;
`
export const CategoryItem = styled.label<{ $checked: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  width: 100%;
  > input {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 18px;
    height: 18px;
    margin: 0;
    cursor: pointer;
    z-index: 2;
  }

  ${({ $checked }) =>
    $checked &&
    css`
      > span > img {
        outline: 2px solid #ffffff;
      }
    `}
`
export const CategoryImg = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 6px;
  object-fit: cover;
  user-select: none;
  -webkit-user-drag: none;
  transition: outline 0.15s ease;
`
export const CategoryCaption = styled.span`
  font-size: 0.75rem;
  text-align: center;
  text-transform: capitalize;
`
