import { InputGroupContainer } from './styles'

const InputGroup = ({ label, error, children }: InputGroupProps) => (
  <InputGroupContainer className={error ? 'error' : ''}>
    {label && <label>{label}</label>}
    {children}
  </InputGroupContainer>
)

export default InputGroup
