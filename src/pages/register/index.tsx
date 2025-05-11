// src/pages/register/index.tsx

import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import type { IconType } from 'react-icons'
import Button from '@/components/Button'
import {
  Container,
  BgImage,
  RegisterCard,
  CardContent,
  StepIcon,
  Title,
  Subtitle,
  InputWrapper,
  StyledInput,
  DotsRow,
  Dot,
  NavRow,
  BackBtn,
  NextBtn,
  Footer,
} from './styles'

import bgSrc from '@/assets/profilewallpaper1.png'
import { FaUserPlus, FaEnvelope, FaPhoneAlt, FaStore, FaLock } from 'react-icons/fa'

type Field = {
  value: string
  set: Dispatch<SetStateAction<string>>
  placeholder: string
  type?: string
}

type Step = {
  icon: IconType
  title: string
  subtitle: string
  fields: Field[]
}

export default function RegisterPage() {
  const router = useRouter()

  useEffect(() => {
    document.body.classList.add('login-page')
    return () => document.body.classList.remove('login-page')
  }, [])

  const [step, setStep] = useState(0)
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [pass, setPass] = useState('')
  const [conf, setConf] = useState('')

  const STEPS: Step[] = [
    {
      icon: FaUserPlus,
      title: 'Crie uma conta',
      subtitle:
        'Seja bem-vindo! Precisamos de algumas informações para efetuar o cadastro.',
      fields: [
        { value: first, set: setFirst, placeholder: 'Digite seu nome' },
        { value: last, set: setLast, placeholder: 'Digite seu sobrenome' },
      ],
    },
    {
      icon: FaEnvelope,
      title: '',
      subtitle: 'Por favor, informe o seu e-mail corporativo.',
      fields: [
        {
          value: email,
          set: setEmail,
          placeholder: 'Digite seu e-mail',
          type: 'email',
        },
      ],
    },
    {
      icon: FaPhoneAlt,
      title: '',
      subtitle: 'Informe um telefone de contato.',
      fields: [
        {
          value: phone,
          set: setPhone,
          placeholder: 'Digite seu telefone',
          type: 'tel',
        },
      ],
    },
    {
      icon: FaStore,
      title: '',
      subtitle: 'Informe o código da concessionária.',
      fields: [
        { value: code, set: setCode, placeholder: 'Código da loja' },
      ],
    },
    {
      icon: FaLock,
      title: '',
      subtitle: 'Por fim, crie uma senha segura.',
      fields: [
        {
          value: pass,
          set: setPass,
          placeholder: 'Senha',
          type: 'password',
        },
        {
          value: conf,
          set: setConf,
          placeholder: 'Confirmar senha',
          type: 'password',
        },
      ],
    },
  ]

  const { icon: Icon, title, subtitle, fields } = STEPS[step]

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))

  const handleBack = () => {
    if (step === 0) {
      router.push('/login')
    } else {
      setStep(step - 1)
    }
  }

  return (
    <>
      <Head>
        <title>Cadastro • Secret Outlet</title>
      </Head>

      <Container>
        <BgImage>
          <Image src={bgSrc} alt="" fill priority />
        </BgImage>

        <RegisterCard>
          <CardContent>
            <StepIcon>
              <Icon size={70} />
            </StepIcon>

            {title && <Title>{title}</Title>}
            <Subtitle>{subtitle}</Subtitle>

            {fields.map((f, i) => (
              <InputWrapper key={i}>
                <StyledInput
                  type={f.type ?? 'text'}
                  value={f.value}
                  onChange={(e) => f.set(e.target.value)}
                  placeholder={f.placeholder}
                />
              </InputWrapper>
            ))}

            <DotsRow>
              {STEPS.map((_, i) => (
                <Dot key={i} $active={i === step} />
              ))}
            </DotsRow>

            <NavRow>
              <BackBtn as={Button} onClick={handleBack}>
                {step === 0 ? 'Login' : 'Voltar'}
              </BackBtn>

              {step < STEPS.length - 1 ? (
                <NextBtn as={Button} onClick={next}>
                  Próximo
                </NextBtn>
              ) : (
                <NextBtn as={Button} onClick={() => router.push('/home')}>
                  Concluir
                </NextBtn>
              )}
            </NavRow>
          </CardContent>
        </RegisterCard>

        <Footer>
          Ao prosseguir você concorda com nossos{' '}
          <Link href="#" style={{ textDecoration: 'underline' }}>
            <strong>Termos e Políticas</strong>
          </Link>
          .
        </Footer>
      </Container>
    </>
  )
}
