import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  SidebarWrapper,
  LogoContainer,
  ToggleWrapper,
  ToggleButton,
  MenuList,
  MenuItem,
  StyledLink,
  IconHome,
  IconCar,
  IconPlane,
  IconBull,
  IconBookmark,
  IconHelp,
  IconFile,
  IconCog,
  IconSignOut,
  IconLock,
  AvatarWrapper,
  Greeting,
  Divider,
  Spacer,
} from './Sidebar.styles'

import logoSrc   from '@/assets/secret.png'
import avatarSrc from '@/assets/eu.jpeg'

export default function Sidebar() {
  const router = useRouter()
  const { pathname } = router

  const [view, setView] = useState<'menu' | 'perfil'>(
    pathname.startsWith('/profile') ? 'perfil' : 'menu'
  )

  useEffect(() => {
    setView(pathname.startsWith('/profile') ? 'perfil' : 'menu')
  }, [pathname])

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault()
    await fetch('/api/auth/logout')
    router.push('/login')
  }

  return (
    <SidebarWrapper>
      <LogoContainer>
        <Image src={logoSrc} alt="Logo" width={110} height={100} priority />
      </LogoContainer>

      <ToggleWrapper>
        <ToggleButton active={view === 'menu'} onClick={() => setView('menu')}>
          Menu
        </ToggleButton>
        <ToggleButton
          active={view === 'perfil'}
          onClick={() => setView('perfil')}
        >
          Perfil
        </ToggleButton>
      </ToggleWrapper>

      {view === 'menu' ? (
        <MenuList>
          <MenuItem>
            <StyledLink href="/home" active={pathname === '/home'}>
              <IconHome /> Home
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="#" disabled>
              <IconCar /> Catálogos
              <IconLock />
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="#" disabled>
              <IconPlane /> Referências
              <IconLock />
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="#" disabled>
              <IconBull /> Rede social
              <IconLock />
            </StyledLink>
          </MenuItem>
        </MenuList>
      ) : (
        <>
          <AvatarWrapper>
            <Image src={avatarSrc} alt="Avatar" width={100} height={100} />
          </AvatarWrapper>
          <Greeting>Olá, Gustavo!</Greeting>
          <Divider />

          <MenuList>
            <MenuItem>
              <StyledLink href="#" disabled>
                <IconBookmark /> Itens Salvos
                <IconLock />
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="#" disabled>
                <IconHelp /> Ajuda
                <IconLock />
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="#" disabled>
                <IconFile /> Políticas
                <IconLock />
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink
                href="/profile/configuration"
                active={pathname === '/profile/configuration'}
              >
                <IconCog /> Configurações
              </StyledLink>
            </MenuItem>
          </MenuList>

          <Spacer />

          <MenuList>
            <MenuItem>
              <StyledLink href="#" disabled onClick={handleLogout}>
                <IconSignOut /> Sair
                <IconLock />
              </StyledLink>
            </MenuItem>
          </MenuList>
        </>
      )}
    </SidebarWrapper>
  )
}
