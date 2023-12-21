import { ChangeEvent, InputHTMLAttributes } from 'react'
import { Container } from './style'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
  id: string
  hasButton: boolean
  placeholder?: string
  option?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onButtonClick?: (event: unknown) => void
}

export function Input({
  title,
  id,
  hasButton,
  placeholder,
  option,
  value,
  onChange,
  onButtonClick,
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
        <button type="button" onClick={onButtonClick}>
          {option}
        </button>
      ) : null}
    </Container>
  )
}
