import { InputHTMLAttributes } from 'react'
import { MdDeleteForever } from 'react-icons/md'

import { Container } from './style'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  id: string
  readOnly: boolean
  value?: string
  hasButton: boolean
}

export function InputReadOnly({
  title,
  id,
  readOnly,
  value,
  hasButton,
}: Props) {
  return (
    <Container>
      <div className="input-area">
        <input id={id} readOnly={readOnly} value={value} />
      </div>
      {hasButton ? (
        <button type="button">
          <MdDeleteForever size={25} />
        </button>
      ) : (
        <label htmlFor={id}>{title}</label>
      )}
    </Container>
  )
}
