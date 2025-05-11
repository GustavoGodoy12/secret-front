import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaUser, FaEnvelope, FaLock, FaCamera } from 'react-icons/fa'
import {
  PageWrapper,
  HeaderSection,
  Breadcrumb,
  HeaderTitle,
  HeaderSubtitle,
  AvatarContainer,
  CameraButton,
  FormSection,
  SectionCard,
  SectionTitle,
  FormRow,
  IconWrapper,
  TextInput,
  ActionButton,
  UnderlineLink,
} from '../../../styles/configuration.styles'
import euImage from '@/assets/eu.jpeg'

export default function Configuration() {
  const [avatarUrl] = useState(euImage.src)
  const [firstName] = useState('Gustavo')
  const [lastName] = useState('Godoy')
  const [email] = useState('email@exemplo.com')
  const [password] = useState('************')

  useEffect(() => {
    // carregar dados reais aqui, se necessário
  }, [])

  const handleChangePassword = () => {
    console.log('Abrir modal de alteração de senha')
  }

  const handleDeleteProfile = () => {
    console.log('Deletar perfil')
  }

  return (
    <PageWrapper>
      <HeaderSection>
        <Breadcrumb>
          <span>PERFIL</span> &gt; <strong>CONFIGURAÇÕES</strong>
        </Breadcrumb>
        <HeaderTitle>Configuração da Conta</HeaderTitle>
        <HeaderSubtitle>
          Atualize as informações que desejar e clique em “Salvar Alterações” para finalizar.
        </HeaderSubtitle>

        <AvatarContainer>
          <Image src={avatarUrl} alt="Avatar" layout="fill" objectFit="cover" />
          <CameraButton>
            <FaCamera size={20} color="#fff" />
          </CameraButton>
        </AvatarContainer>
      </HeaderSection>

      <FormSection>
        <SectionCard>
          <SectionTitle>Conta</SectionTitle>
          <FormRow>
            <IconWrapper><FaUser /></IconWrapper>
            <TextInput value={firstName} placeholder="Nome" />
          </FormRow>
          <FormRow>
            <IconWrapper style={{ opacity: 0 }}><FaUser /></IconWrapper>
            <TextInput value={lastName} placeholder="Sobrenome" />
          </FormRow>
          <FormRow>
            <IconWrapper><FaEnvelope /></IconWrapper>
            <TextInput value={email} placeholder="email@exemplo.com" />
          </FormRow>
          <ActionButton>Salvar Alterações</ActionButton>
        </SectionCard>

        <SectionCard>
          <SectionTitle>Segurança</SectionTitle>
          <FormRow>
            <IconWrapper><FaLock /></IconWrapper>
            <TextInput type="password" value={password} placeholder="••••••••••••" />
          </FormRow>
          <ActionButton onClick={handleChangePassword}>
            Alterar senha
          </ActionButton>
          <UnderlineLink onClick={handleDeleteProfile}>
            Deletar perfil
          </UnderlineLink>
        </SectionCard>
      </FormSection>
    </PageWrapper>
  )
}
