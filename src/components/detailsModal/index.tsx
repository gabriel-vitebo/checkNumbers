import { useEffect } from 'react'
import {
  Overlay,
  Container,
  Header,
  CloseButton,
  Columns,
  Column,
  Item,
} from './style'

interface ModalGameResult {
  index: number
  matchedNumbers: string[]
  count: number
}

interface Props {
  isOpen: boolean
  onClose: () => void
  grouped: Record<number, ModalGameResult[]>
}

export function DetailsModal({ isOpen, onClose, grouped }: Props) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  const counts = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <Overlay>
      <Container>
        <Header>
          <h3>Detalhes dos Resultados</h3>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>

        <Columns>
          {counts.map((count) => (
            <Column key={count}>
              <strong>
                {count} acerto{count > 1 ? 's' : ''}
              </strong>

              {grouped[count].map((game) => (
                <Item key={game.index}>
                  <div>Jogo {game.index + 1}</div>
                  <div>{game.matchedNumbers.join(', ')}</div>
                </Item>
              ))}
            </Column>
          ))}
        </Columns>
      </Container>
    </Overlay>
  )
}
