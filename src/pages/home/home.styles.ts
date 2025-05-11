
import styled from 'styled-components'
import { FILTER_WIDTH } from '@/components/Filters/styles'
import { deviceSizes } from '@/styles/device-sizes'


export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`

export const Main = styled.main`
  flex: 1;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 3rem;


  margin-right: ${FILTER_WIDTH}px;


  padding-bottom: 5rem;

  @media screen and (max-width: ${deviceSizes.medium}px) {
    margin-right: 0;
  }
`


export const SectionTitle = styled.h2`
  font-family: var(--font-geist-sans, Arial, Helvetica, sans-serif);
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: #ffffff;
`


export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 32px;
`


export const ProductCard = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 1px;
  cursor: pointer;

  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1.5px solid transparent;
    transition: border-color 0.2s;
    z-index: 2;
    pointer-events: none;
  }

  &:hover::before {
    border-color: #2563eb;
  }

  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 100%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 0;
    pointer-events: none;
  }


  span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    pointer-events: none;
    z-index: 1;
  }
`
