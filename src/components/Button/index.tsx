import { ButtonContainer, ButtonLink } from './styles'

const Button = ({
  type,
  buttonTitle,
  to,
  onClick,
  children,
  disabled
}: ButtonProps) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        buttonTitle={buttonTitle}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink type="link" buttonTitle={buttonTitle} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
