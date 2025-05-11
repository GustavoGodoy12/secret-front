
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from '@/components/Button'
import {
  Container, BgImage, LeftBrand, Logo, LoginCard, CardContent,
  Title, Subtitle, InputWrapper, StyledInput, IconCheck,
  IconEyeOpen, IconEyeClosed, CheckboxRow, StyledCheckbox,
  PrimaryButton, TextButton, DividerRow, Divider, DividerLabel,
  ForgotLink, Footer,
} from '../../styles/login.styles'

import bgSrc from '@/assets/profilewallpaper1.png'
import logoSrc from '@/assets/secret.png'

export default function LoginPage() {
  const router = useRouter()

  const [email,    setEmail] = useState('')
  const [password, setPass]  = useState('')
  const [show,     setShow]  = useState(false)
  const [keep,     setKeep]  = useState(false)

  useEffect(() => {
    document.body.classList.add('login-page')
    return () => document.body.classList.remove('login-page')
  }, [])

  const handleLogin = async () => {
    await fetch('/api/auth/mock-login', { method: 'POST' })
    router.push('/home')
  }

  return (
    <>
      <Head><title>Login • Secret Outlet</title></Head>

      <Container>
        <BgImage><Image src={bgSrc} alt="" fill priority/></BgImage>

        <LeftBrand>
          <Logo><Image src={logoSrc} alt="Secret" fill priority/></Logo>
        </LeftBrand>

        <LoginCard>
          <CardContent>
            <Title>Olá, vendedor!</Title>
            <Subtitle>Faça login ou realize seu cadastro.</Subtitle>

            <InputWrapper>
              <StyledInput
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
              {email && <IconCheck $ok={true} /> }
            </InputWrapper>

            <InputWrapper>
              <StyledInput
                type={show?'text':'password'}
                placeholder="Senha"
                value={password}
                onChange={(e)=>setPass(e.target.value)}
              />
              {show
                ? <IconEyeClosed onClick={()=>setShow(false)}/>
                : <IconEyeOpen   onClick={()=>setShow(true)}/>
              }
            </InputWrapper>

            <CheckboxRow>
              <StyledCheckbox
                id="keep" checked={keep} type="checkbox"
                onChange={e=>setKeep(e.target.checked)}
              />
              <label htmlFor="keep">Permanecer conectado</label>
            </CheckboxRow>

            <PrimaryButton as={Button} onClick={handleLogin}>
              Entrar
            </PrimaryButton>

            <ForgotLink href="#">Esqueceu sua senha?</ForgotLink>

            <DividerRow><Divider/><DividerLabel>ou</DividerLabel><Divider/></DividerRow>

            <Link href="/register" passHref legacyBehavior>
              <TextButton as={Button}>
                Novo por aqui? <strong>Cadastre-se</strong>
              </TextButton>
            </Link>
          </CardContent>
        </LoginCard>

        <Footer>
          desenvolvido por <strong>Secret devs</strong>
        </Footer>
      </Container>
    </>
  )
}
