import { InputHTMLAttributes } from 'react'
import { CiSquarePlus } from 'react-icons/ci'
import { Container } from './style'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  id: string
  hasButton: boolean
  placeholder: string
}

export function Input({ title, id, hasButton, placeholder }: Props) {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <div className="input-area">
        <input id={id} placeholder={placeholder} />
      </div>
      {hasButton ? (
        <button type="button">
          Add
          <CiSquarePlus size="20px" />
        </button>
      ) : null}
    </Container>
  )
}
