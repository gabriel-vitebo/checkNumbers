import { InputHTMLAttributes } from 'react'
import { Container } from './style'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  id: string
  hasButton: boolean
  placeholder?: string
  option?: string
}

export function Input({ title, id, hasButton, placeholder, option }: Props) {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <div className="input-area">
        <input id={id} placeholder={placeholder} />
      </div>
      {hasButton ? <button type="button">{option}</button> : null}
    </Container>
  )
}
