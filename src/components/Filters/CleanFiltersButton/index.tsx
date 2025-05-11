import { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { active: boolean }

export function CleanFiltersButton({ active, ...rest }: Props) {
  return (
    <Container active={active} {...rest}>
      Limpar todos
    </Container>
  )
}
