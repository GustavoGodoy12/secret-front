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
            <StyledLink href="/showroom" active={pathname === '/showroom'}>
              <IconCar /> Teste
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="/compartilhar" active={pathname === '/compartilhar'}>
              <IconPlane /> Teste
            </StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="/campanhas" active={pathname === '/campanhas'}>
              <IconBull /> Teste
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
              <StyledLink
                href="/profile/itens-salvos"
                active={pathname === '/profile/itens-salvos'}
              >
                <IconBookmark /> Itens Salvos
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink href="/profile/ajuda" active={pathname === '/profile/ajuda'}>
                <IconHelp /> Ajuda
              </StyledLink>
            </MenuItem>
            <MenuItem>
              <StyledLink
                href="/profile/politicas"
                active={pathname === '/profile/politicas'}
              >
                <IconFile /> Políticas
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
              <StyledLink
                href="/login"
                active={false}
                onClick={handleLogout}
              >
                <IconSignOut /> Sair
              </StyledLink>
            </MenuItem>
          </MenuList>
        </>
      )}
    </SidebarWrapper>
  )
}
