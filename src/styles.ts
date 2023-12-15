import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0 2rem 0;
`

export const UserGame = styled.div`
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

export const ResultGame = styled.div`
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
