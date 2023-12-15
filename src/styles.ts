import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 90%;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  padding: 2rem 0 2rem 0;
`

export const Header = styled.header`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 0 2.5rem 0;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.line};
`

export const UserNumberGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    margin-bottom: 1.5rem;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.light100};
  }
`

export const DrawnNumbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    margin-bottom: 1.5rem;
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.light100};
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  padding: 2rem 0 2rem 0;
  justify-content: space-around;
  align-items: center;
  grid-column-start: 1;

  > .buttonDelete {
    display: flex;
    width: 75%;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }

  > .content {
    display: flex;
    width: 100vw;
    justify-content: space-around;
  }
`

export const UserGames = styled.main``

export const Result = styled.main``
