import { ReactNode } from 'react'
import Button from '../Button'
import { CardContainer } from './styles'

type CardProps = {
  title: string
  children: ReactNode
}

const Card = ({ title, children }: CardProps) => (
  <CardContainer>
    <div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
    <Button type="link" title="Acessar o portal para fornecedores">
      Entrar
    </Button>
  </CardContainer>
)

export default Card
