import styled from 'styled-components'
import { deviceSizes } from '@/styles/device-sizes'
import { FILTER_WIDTH } from '@/components/Filters/styles'



export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;              
`

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding-right: calc(${FILTER_WIDTH}px + 1rem);
  display: flex;
  gap: 1rem;                  
`



export const Breadcrumb = styled.nav`
  width: 100%;
  padding: 0.5rem 0;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 6px;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: ${deviceSizes.small}px) {
    font-size: 10px;
  }
`

export const Crumb = styled.span<{ bold?: boolean }>`
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
`



const gray = '#bfbfbf';


export const MainPlaceholder = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background: ${gray};
`

export const SmallRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${deviceSizes.small}px) {
    grid-template-columns: 1fr;
  }
`


export const SmallPlaceholder = styled.div`
  width: 100%;
  padding-top: 66.66%;
  background: ${gray};
`


export const BottomPlaceholder = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background: ${gray};
`
