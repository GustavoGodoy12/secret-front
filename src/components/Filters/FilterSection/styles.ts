import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.55rem 0;
  cursor: pointer;
  user-select: none;

  h3 {
    flex: 1;
    font-size: 16px;
    font-weight: 300;
  }
`

export const DropdownButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.25rem;
`

/* Pequeno chevron usando bordas */
export const DropdownChevron = styled.span<{ dir: 'up' | 'down' }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(${({ dir }) => (dir === 'up' ? '-135deg' : '45deg')});
  transition: transform 0.2s;
`

export const Content = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;

  label {
    font-size: 14px;
    display: flex;
    gap: 0.5rem;
  }
`
