import styled from 'styled-components'
import wallpaper from '@/assets/profilewallpaper1.png'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #000;
  color: #fff;
`


export const HeaderSection = styled.header`
  position: relative;
  width: 100%;
  padding: 8rem 0 4rem;
  background: url(${wallpaper.src}) center/cover no-repeat;
  text-align: center;
  box-shadow: inset 0 -20px 30px -10px rgba(0, 0, 0, 0.7);
`

export const Breadcrumb = styled.nav`
  font-size: 0.75rem;
  color: rgba(255,255,255,0.7);
  span { opacity: 0.7; }
  strong { font-weight: 600; }
  margin-bottom: 1rem;
`

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
`

export const HeaderSubtitle = styled.p`
  font-size: 0.875rem;
  opacity: 0.85;
  margin: 0 0 1rem;
`

export const AvatarContainer = styled.div`
  position: absolute;
  bottom: -110px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #222;
  background: #333;
  overflow: hidden;
  z-index: 1;
`

export const CameraButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(25%,25%);
  background: rgba(0,0,0,0.7);
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 2;
`

export const FormSection = styled.section`
  margin-top: 75px;
  padding: 0 30px 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const SectionCard = styled.div`
  width: 100%;
  background: #2a2a2a;
  border-radius: 24px;
  padding: 4rem 2rem 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
`

export const SectionTitle = styled.h2`
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: rgba(255,255,255,0.6);
  width: 32px;
  display: flex;
  justify-content: center;
`

export const TextInput = styled.input.attrs({ readOnly: true })`
  flex: 1;
  height: 48px;
  padding: 0 1rem;
  background: #3a3a3a;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 24px;
  color: #ddd;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255,255,255,0.5);
  }
`

export const ActionButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 2rem;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 24px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`

export const UnderlineLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
`
