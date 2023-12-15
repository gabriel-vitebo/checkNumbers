// import { InputHTMLAttributes } from 'react'
import { Container } from './style'
import { TiDelete } from 'react-icons/ti'

// interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function DeleteButton() {
  return (
    <Container>
      Deletar todos os jogos
      <TiDelete size={25} />
    </Container>
  )
}
