import igImg from '../../assets/images/instagram.png'
import fbImg from '../../assets/images/facebook.png'
import ytImg from '../../assets/images/youtube.png'
import * as S from './styles'
import InputGroup from '../InputGroup'
import Button from '../Button'

const Contact = () => (
  <S.ContactContainer>
    <div className="container">
      <h2>Contato</h2>
      <div className="contact-methods">
        <div>
          <h3>Fale conosco</h3>
          <form>
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
            <Button type="submit" title="Clique aqui para Enviar">
              Enviar
            </Button>
          </form>
        </div>
        <div>
          <div className="social-links">
            <h3>Nos acompanhe</h3>
            <ul>
              <li>
                <a href="#" title="Siga-nos no Instagram">
                  <img src={igImg} alt="Logo do Instagram" />
                </a>
              </li>
              <li>
                <a href="#" title="Siga-nos no Facebook">
                  <img src={fbImg} alt="Logo do Facebook" />
                </a>
              </li>
              <li>
                <a href="#" title="Visite nosso canal no Youtube">
                  <img src={ytImg} alt="Logo do Youtube" />
                </a>
              </li>
            </ul>
          </div>
          <div className="data">
            <h3>Dados</h3>
            <p>
              CNPJ: 12.345.678/0001-91 <br />
              Nome: B2B Soluctions / BBS <br />
              Rasão Social: Soluções B2B <br />
              <br />
              Rua Projeto n° 1, Vila HTML&CSS - Natal - RN
            </p>
          </div>
        </div>
      </div>
    </div>
  </S.ContactContainer>
)

export default Contact
