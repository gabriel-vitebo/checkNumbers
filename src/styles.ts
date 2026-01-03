import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  align-items: center;
`

export const Header = styled.header`
  position: fixed;
  background-color: ${({ theme }) => theme.COLORS.dark};
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  padding: 2rem 0 2.5rem 0;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.line};
`

export const UserNumberGame = styled.div`
  > h2 {
    margin-left: 2rem;
    margin-bottom: 1.5rem;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.light100};
  }
`

export const DrawnNumbers = styled.div`
  > h2 {
    margin-left: 2rem;
    margin-bottom: 1.5rem;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.light100};
  }
`

export const Main = styled.main`
  margin-top: 11.6rem;

  display: flex;
  width: 100vw;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 0 2rem 0;
  justify-content: space-around;
  align-items: center;

  > .buttonDelete {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  > .content {
    display: flex;
    justify-content: center;
    gap: 6rem;
    width: 100%;
  }
`

export const UserGames = styled.main``

export const Result = styled.main``

export const DetailsButton = styled.button`
  margin-left: 1rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`
