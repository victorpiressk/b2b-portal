import { ButtonContainer } from './styles'

type SideButtonsProps = {
  children: string
  onClick?: () => void
  isActive: boolean
}

const SideButtons = ({ children, onClick, isActive }: SideButtonsProps) => (
  <>
    <ButtonContainer type="button" onClick={onClick} active={isActive}>
      {children}
    </ButtonContainer>
  </>
)

export default SideButtons
