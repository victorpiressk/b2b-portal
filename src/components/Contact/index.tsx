import InputGroup from '../InputGroup'
import Button from '../Button'
import * as S from './styles'
import closeIcon from '../../assets/images/close.png'

const Contact = ({ isVisible, onClose }: ModalProps) => (
  <S.Modal className={isVisible ? 'visivel' : ''}>
    <S.ModalContent className="container">
      <header>
        <img src={closeIcon} alt="Ícone de fechar" onClick={onClose} />
      </header>
      <form>
        <h3>Fale conosco</h3>
        <InputGroup>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="e-mail" required />
          <input type="tel" placeholder="Telefone (opcional)" />
          <textarea placeholder="Mensagem" required></textarea>
          <div>
            <input type="checkbox" id="checkbox-publicidade" required />
            <label htmlFor="checkbox-publicidade">
              Aceito receber comunicações da BBS
            </label>{' '}
          </div>
          <div>
            <input type="checkbox" id="checkbox-termos" required />{' '}
            <label htmlFor="checkbox-termos">
              Eu concordo com os termos de comunicações da BBS
            </label>
          </div>
        </InputGroup>
        <Button type="submit" buttonTitle="Clique aqui para Enviar">
          Enviar
        </Button>
      </form>
    </S.ModalContent>
    <div className="overlay" onClick={onClose}></div>
  </S.Modal>
)

export default Contact
