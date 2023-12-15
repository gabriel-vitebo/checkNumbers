import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;

  > button {
    background: none;
    border: none;
    svg {
      color: ${({ theme }) => theme.COLORS.light100};
    }

    &:hover {
      svg {
        color: ${({ theme }) => theme.COLORS.fatal};
      }
    }
  }

  > label {
    font-family: ${({ theme }) => theme.FONTS.Poppins};
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.light100};
  }

  > .input-area {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.light200};
    color: ${({ theme }) => theme.COLORS.light100};
    border-radius: 0.8rem;

    input {
      height: 2.8rem;
      padding: 1.6rem 1.4rem;
      background-color: transparent;
      border: none;
      font-family: ${({ theme }) => theme.FONTS.Poppins};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.dark};

      &::placeholder {
        font-family: ${({ theme }) => theme.FONTS.Poppins};
        color: ${({ theme }) => theme.COLORS.dark};
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.6rem;
      }
    }
  }
`
