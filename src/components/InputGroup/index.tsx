import { ReactNode } from 'react'
import { InputGroupContainer } from './styles'

type InputGroupProps = {
  label?: string
  error?: string
  children: ReactNode
}

const InputGroup = ({ label, error, children }: InputGroupProps) => {
  return (
    <InputGroupContainer className={error ? 'error' : ''}>
      {label && <label>{label}</label>}
      {children}
    </InputGroupContainer>
  )
}

export default InputGroup
