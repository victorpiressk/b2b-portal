import closeIcon from '../../assets/images/close.png'
import * as S from './styles'

const ViewDescription = ({ isVisible, onClose, description }: ModalProps) => {
  return (
    <S.Modal className={isVisible ? 'visivel' : ''}>
      <S.ModalContent className="container">
        <header>
          <img src={closeIcon} alt="Ícone de fechar" onClick={onClose} />
        </header>
        <h3>Descrição</h3>
        <S.DescriptionContainer>
          <p>{description}</p>
        </S.DescriptionContainer>
      </S.ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </S.Modal>
  )
}

export default ViewDescription
