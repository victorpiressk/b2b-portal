import closeIcon from '../../assets/images/close.png'
import InputGroup from '../InputGroup'
import Button from '../Button'
import * as S from './styles'

const Login = ({ isVisible, onClose }: ModalProps) => {
  return (
    <S.Modal className={isVisible ? 'visivel' : ''}>
      <S.ModalContent className="container">
        <header>
          <img src={closeIcon} alt="Ícone de fechar" onClick={onClose} />
        </header>
        <main>
          <form>
            <h3>Log-in</h3>
            <InputGroup>
              <input type="email" placeholder="Usuário" required />
              <input type="password" placeholder="Senha" required />
            </InputGroup>
            <Button type="submit" buttonTitle="Clique aqui para Entrar">
              Entrar
            </Button>
          </form>
          <form>
            <h3>Sig-up</h3>
            <InputGroup>
              <input type="text" placeholder="Empresa" required />
              <input type="email" placeholder="e-mail comercial" required />
              <input
                type="number"
                placeholder="Número de funcionarios"
                required
              />
              <input type="tel" placeholder="Seu telefone (opcional)" />
              <select name="" id="">
                <option value="">Fornecedor</option>
                <option value="">Cliente (Comprador)</option>
              </select>
            </InputGroup>
            <Button type="submit" buttonTitle="Clique aqui para Entrar">
              Cadastrar
            </Button>
          </form>
        </main>
      </S.ModalContent>
      <div className="overlay" onClick={onClose}></div>
    </S.Modal>
  )
}

export default Login
