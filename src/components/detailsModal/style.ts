import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`

export const Container = styled.div`
  width: 92%;
  max-width: 1100px;
  max-height: 90vh;
  background: ${({ theme }) => theme.COLORS.dark};
  color: ${({ theme }) => theme.COLORS.light100};
  border-radius: 0.8rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.5);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;

  h3 {
    margin: 0;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-size: 1.8rem;
    font-weight: 600;
  }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.light100};
  font-size: 2.6rem;
  cursor: pointer;
  line-height: 1;

  &:hover {
    opacity: 0.8;
  }
`

export const Columns = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  /* scroll suave */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.COLORS.light300} transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.light300};
    border-radius: 4px;
  }
`

export const Column = styled.div`
  min-width: 220px;
  max-width: 260px;
  background: ${({ theme }) => theme.COLORS.light200};
  color: ${({ theme }) => theme.COLORS.dark};
  border-radius: 0.6rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  > strong {
    display: block;
    margin-bottom: 0.6rem;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
  }
`

export const Item = styled.div`
  background: ${({ theme }) => theme.COLORS.dark};
  color: ${({ theme }) => theme.COLORS.light100};
  padding: 0.6rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.6rem;

  &:last-child {
    margin-bottom: 0;
  }

  div:first-child {
    font-weight: 600;
    font-size: 1.3rem;
  }

  div:last-child {
    font-size: 1.2rem;
    opacity: 0.95;
    word-break: break-word;
  }
`
