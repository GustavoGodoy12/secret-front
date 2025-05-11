import { ReactNode, useState } from 'react'
import {
  Container,
  Header,
  DropdownButton,
  DropdownChevron,
  Content,
} from './styles'

type Props = {
  title: string
  isActive?: boolean
  children: ReactNode
}

export function FilterSection({ title, children, isActive = false }: Props) {
  const [active, setActive] = useState(isActive)

  return (
    <Container>
      <Header onClick={() => setActive((prev) => !prev)}>
        <h3>{title}</h3>
        <DropdownButton aria-label={`Alternar filtro para ${title}`}>
          <DropdownChevron dir={active ? 'up' : 'down'} />
        </DropdownButton>
      </Header>

      <Content active={active}>{children}</Content>
    </Container>
  )
}
