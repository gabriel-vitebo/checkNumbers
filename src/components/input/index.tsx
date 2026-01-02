import React, { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from 'react'
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
  inputRef?: React.RefObject<HTMLInputElement>
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
  inputRef,
  ...rest
}: Props) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (onButtonClick) onButtonClick(undefined)
      // keep focus on input
      e.currentTarget.focus()
    }
  }

  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <div className="input-area">
        <input
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          ref={inputRef}
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
