import Link from 'next/link'
import styled, { css } from 'styled-components'
import {
  FaHome,
  FaCarSide,
  FaPaperPlane,
  FaBullhorn,
  FaBookmark,
  FaQuestionCircle,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaLock,
} from 'react-icons/fa'

export const SIDEBAR_WIDTH = '260px'

export const SidebarWrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${SIDEBAR_WIDTH};
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
  box-shadow: 2px 0 5px rgba(0,0,0,0.5);
  z-index: 100;
`

export const LogoContainer = styled.div`
  margin-bottom: 2rem;
`

export const ToggleWrapper = styled.div`
  display: flex;
  background: #fff;
  border: 4px solid #fff;
  border-radius: 30px;
  margin-bottom: 2.5rem;
  overflow: hidden;
`

export const ToggleButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 0.45rem 1.7rem;
  font-size: 0.9rem;
  border: none;
  background: ${({ active }) => (active ? '#000' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.8; }
  &:focus { outline: none; }
`

export const MenuList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MenuItem = styled.li``

export const AvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;
  margin-bottom: 1rem;
`

export const Greeting = styled.p`
  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

export const Divider = styled.hr`
  width: 80%;
  border: none;
  border-top: 1px solid rgba(255,255,255,0.2);
  margin: 1rem 0;
`

export const Spacer = styled.div`
  flex: 1;
`

// Ícones principais
export const IconHome     = styled(FaHome)`       color: #fff;`
export const IconCar      = styled(FaCarSide)`    color: #fff;`
export const IconPlane    = styled(FaPaperPlane)` color: #fff;`
export const IconBull     = styled(FaBullhorn)`   color: #fff;`
export const IconBookmark = styled(FaBookmark)`   color: #fff;`
export const IconHelp     = styled(FaQuestionCircle)` color: #fff;`
export const IconFile     = styled(FaFileAlt)`    color: #fff;`
export const IconCog      = styled(FaCog)`        color: #fff;`
export const IconSignOut  = styled(FaSignOutAlt)` color: #fff;`


export const IconLock     = styled(FaLock)`
  color: inherit;
  margin-left: auto;
`


export const StyledLink = styled(Link)<{ active?: boolean; disabled?: boolean }>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.75rem;
  justify-content: flex-start;
  color: ${({ active, disabled }) =>
    disabled
      ? 'rgba(255,255,255,0.4)'
      : active
        ? '#fff'
        : 'rgba(255,255,255,0.7)'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? 600 : 500)};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background 0.2s;


  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: default;
    `}


  ${({ active, disabled }) =>
    !disabled &&
    css`
      pointer-events: ${active ? 'none' : 'auto'};
      cursor: ${active ? 'default' : 'pointer'};
      &:hover {
        background: rgba(255,255,255,0.1);
      }
    `}
`
