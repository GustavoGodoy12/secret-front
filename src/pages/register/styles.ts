import styled from 'styled-components'
import { StyledButton } from '@/components/Button/styles'



const inputBg = '#202020'
const gradient =
  'linear-gradient(180deg, rgba(25,25,25,0.9) 0%, rgba(10,10,10,0.85) 100%)'


export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BgImage = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  img {
    object-fit: cover;
  }
`


export const RegisterCard = styled.div`
  width: 480px;
  max-width: 90vw;
  border-radius: 10px;
  background: ${gradient};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.55);
`
export const CardContent = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`


export const StepIcon = styled.div`
  color: #fff;              
  margin-bottom: 0.5rem;
`
export const Title = styled.h1`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
`
export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 1rem;
  text-align: center;
`


export const InputWrapper = styled.div`
  width: 100%;
`
export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 30px;
  border: none;
  background: ${inputBg};
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #888;
  }
`


export const DotsRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0 1.5rem;
`
export const Dot = styled.span<{ $active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? '#fff' : '#777')};
`


export const NavRow = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`
const BtnBase = styled(StyledButton)`
  flex:1;
  font-size:1.05rem;
  padding:0.9rem;
  border-radius:30px;
  transition:opacity .2s;

  &:disabled{opacity:.4;cursor:not-allowed;}
`
export const BackBtn = styled(BtnBase)`
  background:transparent;
  border:1px solid #fff;
  color:#fff;
`
export const NextBtn = styled(BtnBase)`
  background:#B01E2D;
  border:none;
  color:#fff;
  &:hover:not(:disabled){opacity:.85;}
`


export const Footer = styled.p`
  position: absolute;
  bottom: 1.2rem;
  width: 100%;
  text-align: center;
  color: #ddd;
  font-size: 0.8rem;

  strong {
    font-weight: 700;
  }
`
