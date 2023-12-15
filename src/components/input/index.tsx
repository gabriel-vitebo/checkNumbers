import { ChangeEvent, InputHTMLAttributes, MouseEvent } from 'react'
import { Container } from './style'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  id: string
  hasButton: boolean
  placeholder?: string
  option?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export function Input({
  title,
  id,
  hasButton,
  placeholder,
  option,
  value,
  onChange,
  onClick,
  ...rest
}: Props) {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <div className="input-area">
        <input
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
      {hasButton ? (
        <button type="button" onClick={onClick}>
          {option}
        </button>
      ) : null}
    </Container>
  )
}
