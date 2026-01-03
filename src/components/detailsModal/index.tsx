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
  const containerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveElementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      // Store the currently focused element
      previousActiveElementRef.current = document.activeElement as HTMLElement

      // Focus the close button when modal opens
      closeButtonRef.current?.focus()

      // Handle Escape key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }

      // Handle focus trap
      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        const focusableElements = containerRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )

        if (!focusableElements || focusableElements.length === 0) return

        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }

      document.addEventListener('keydown', handleEscape)
      document.addEventListener('keydown', handleTab)

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.removeEventListener('keydown', handleTab)
      }
    } else {
      // Return focus to the triggering element when modal closes
      if (previousActiveElementRef.current) {
        previousActiveElementRef.current.focus()
      }
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
