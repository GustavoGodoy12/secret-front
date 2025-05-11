import styled from 'styled-components'
import { FaCheckCircle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { StyledButton } from '@/components/Button/styles'


const red   = '#B01E2D'
const gray1 = '#F0F2FF'
const cardGradient =
  'linear-gradient(180deg, rgba(25,25,25,0.9) 0%, rgba(10,10,10,0.8) 100%)'



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
  position: absolute;
  inset: 0;
  z-index: -2;

  img {
    object-fit: cover;
  }
`



export const LeftBrand = styled.div`
  position: absolute;
  left: 8vw;
  top: 45%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 900px) {
    display: none;
  }
`

export const Logo = styled.div`
  position: relative;
  width: 140px;
  height: 130px;
`

export const BrandText = styled.h2`
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
`



export const LoginCard = styled.div`
  width: 420px;
  max-width: 90vw;
  border-radius: 10px;
  background: ${cardGradient};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.55);
  overflow: hidden;
`

export const CardContent = styled.div`
  padding: 3rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`

export const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  text-align: center;
  margin-top: -0.5rem;
`



export const InputWrapper = styled.div`
  position: relative;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.95rem 3rem 0.95rem 1rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background: ${gray1};
  font-size: 0.95rem;
`

export const IconCheck = styled(FaCheckCircle)<{ $ok: boolean }>`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: ${({ $ok }) => ($ok ? '#2ecc71' : 'transparent')};
`



export const IconEyeOpen = styled(FaRegEye)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 1.2rem;
  cursor: pointer;
`

export const IconEyeClosed = styled(FaRegEyeSlash)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 1.2rem;
  cursor: pointer;
`



export const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  user-select: none;
`

export const StyledCheckbox = styled.input`
  accent-color: ${red};
  width: 16px;
  height: 16px;
  cursor: pointer;
`



export const LoginButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  border: none;
  border-radius: 30px;
  background: ${red};
  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  margin-top: 0.25rem;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`

export const ForgotLink = styled.a`
  color: #ccc;
  font-size: 0.83rem;
  text-align: center;
  margin-top: 0.2rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const PrimaryButton = styled(StyledButton)`
  background: #B01E2D;
  border: none;
  font-size: 1.05rem;
  &:hover:not(:disabled) { opacity: .85; }
`


export const TextButton = styled(StyledButton)`
  width: auto;
  padding: 0.9rem 2.5rem;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  align-self: center;            
  &:hover { opacity: .85; }
`

export const DividerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Divider = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
`

export const DividerLabel = styled.span`
  color: #bbb;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export const CreateAccountButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  border: 1px solid #fff;
  border-radius: 30px;
  background: transparent;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: background 0.2s;

  strong {
    font-weight: 700;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`


export const Footer = styled.p`
  position: absolute;
  bottom: 1.1rem;
  right: 2rem;
  color: #ddd;
  font-size: 0.7rem;

  strong {
    font-weight: 700;
  }
`
