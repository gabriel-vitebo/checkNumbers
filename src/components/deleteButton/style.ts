import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  width: 100vw;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.fatal};
  border: none;
  width: auto;
  height: 2.8rem;
  color: ${({ theme }) => theme.COLORS.light100};
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.FONTS.Poppins};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.fatal2};
  }
`
