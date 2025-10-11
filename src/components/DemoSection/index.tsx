import Button from '../Button'
import Card from '../Card'
import * as S from './styles'

const Demo = () => (
  <S.DemoContainer>
    <div className="container">
      <h2>Experimente o Portal BBS</h2>

      <S.IntroContainer>
        <p>
          O Portal B2B foi desenvolvido para conectar fornecedores e compradores
          em um único ambiente, simplificando processos de negociação,
          acompanhamento e gestão de pedidos.
        </p>
        <p>
          Explore abaixo como cada perfil interage dentro do sistema e veja como
          a plataforma pode facilitar o dia a dia do seu negócio.
        </p>
      </S.IntroContainer>
      <S.DemoContent>
        <Card cardTitle="Fornecedor">
          <div>
            <p>
              Gerencie solicitações e acompanhe suas vendas em tempo real com
              controle total sobre propostas e entregas.
            </p>
            <Button
              type="link"
              buttonTitle="Clique aqui para ver painel de fornecedores"
              to="/supplier"
            >
              Ver Painel
            </Button>
          </div>
        </Card>
        <Card cardTitle="Comprador">
          <div>
            <p>
              Envie solicitações de compra, compare propostas e gerencie seus
              pedidos com praticidade e transparência. Tudo em nosso portal.
            </p>
            <Button
              type="link"
              buttonTitle="Clique aqui para simular o acesso do comprador"
              to="/buyer"
            >
              Simular Acesso
            </Button>
          </div>
        </Card>
      </S.DemoContent>
    </div>
  </S.DemoContainer>
)

export default Demo
