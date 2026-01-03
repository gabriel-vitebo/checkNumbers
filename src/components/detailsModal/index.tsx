import { useEffect, useRef } from 'react'
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
    if (!isOpen) return

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const counts = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <Overlay onClick={onClose}>
      <Container
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          <h3 id="modal-title">Detalhes dos Resultados</h3>
          <CloseButton
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ×
          </CloseButton>
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
