import { FooterContainer } from './styles'
import igImg from '../../assets/images/instagram.png'
import fbImg from '../../assets/images/facebook.png'
import ytImg from '../../assets/images/youtube.png'

const Footer = () => (
  <FooterContainer>
    <div className="container">
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
          <i>Rua Projeto n° 1, Vila HTML&CSS - Natal - RN</i>
        </p>
      </div>
      <p>&copy; B2B Soluctions - Todos os direitos reservados - 2025</p>
    </div>
  </FooterContainer>
)

export default Footer
