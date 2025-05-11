import { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, ...rest }: Props) {
  return <StyledButton {...rest}>{children}</StyledButton>
}
