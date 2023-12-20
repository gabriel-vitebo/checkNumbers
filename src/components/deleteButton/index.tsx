import { Container } from './style'
import { TiDelete } from 'react-icons/ti'

interface DeleteButtonProps {
  onClick: () => void
}
export function DeleteButton({ onClick, ...rest }: DeleteButtonProps) {
  return (
    <Container onClick={onClick} {...rest}>
      Deletar todos os jogos
      <TiDelete size={25} />
    </Container>
  )
}
