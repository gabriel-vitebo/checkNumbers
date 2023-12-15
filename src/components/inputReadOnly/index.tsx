import { InputHTMLAttributes } from 'react'
import { Container } from './style'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  id: string
  readOnly: boolean
  value?: string
}

export function InputReadOnly({ title, id, readOnly, value }: Props) {
  return (
    <Container>
      <div className="input-area">
        <input id={id} readOnly={readOnly} value={value} />
      </div>
      <label htmlFor={id}>{title}</label>
    </Container>
  )
}
