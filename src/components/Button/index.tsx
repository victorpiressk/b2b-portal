import { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

export type ButtonProps = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
}

const Button = ({ type, title, to, onClick, children }: ButtonProps) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer type={type} title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} type="link">
      {children}
    </ButtonLink>
  )
}

export default Button
