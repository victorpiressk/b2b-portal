import { CardContainer } from './styles'

const Card = ({ cardTitle, children }: CardProps) => (
  <CardContainer>
    <h3>{cardTitle}</h3>
    {children}
  </CardContainer>
)

export default Card
