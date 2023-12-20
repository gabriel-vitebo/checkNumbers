import { InputHTMLAttributes, MouseEvent } from 'react'
import { MdDeleteForever } from 'react-icons/md'

import { Container } from './style'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  id: string
  readOnly: boolean
  value?: string
  hasButton: boolean
  onDelete?: (event: MouseEvent<HTMLButtonElement>) => void
}

export function InputReadOnly({
  title,
  id,
  readOnly,
  value,
  hasButton,
  onDelete,
}: Props) {
  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    if (onDelete) {
      onDelete(event)
    }
  }

  return (
    <Container>
      <div className="input-area">
        <input id={id} readOnly={readOnly} value={value} />
      </div>
      {hasButton ? (
        <button type="button" onClick={handleDelete}>
          <MdDeleteForever size={25} />
        </button>
      ) : (
        <label htmlFor={id}>{title}</label>
      )}
    </Container>
  )
}
