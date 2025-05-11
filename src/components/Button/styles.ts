import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background: #000;          
  color: #fff;               
  border: 1px solid #fff;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`
