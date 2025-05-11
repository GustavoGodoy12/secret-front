import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  width: 79%;
  margin: 2rem 0 3rem;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1rem;
  text-align: left;
`

export const Track = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: 0.5rem; 
  scrollbar-width: none; 
  &::-webkit-scrollbar {
    display: none; 
  }
`


export const Card = styled.div<{ $color: string }>`
  flex: 0 0 200px;
  height: 240px;
  border-radius: 2px;
  scroll-snap-align: start;
  background: ${({ $color }) => $color};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.25);
  user-select: none;
`

export const Controls = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`


export const NavButton = styled.button<{ $active: boolean }>`
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  color: ${({ $active }) => ($active ? 'gray' : '#fff')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`

export const Arrow = styled.i`
  font-size: 1rem;
  pointer-events: none;
`
