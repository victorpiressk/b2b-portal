import Card from '../Card'
import { DemoContainer, DemoContent, IntroContainer } from './styles'

const Demo = () => (
  <DemoContainer>
    <div className="container">
      <h2>Experimente o Portal BBS</h2>

      <IntroContainer>
        <p>
          O Portal B2B foi desenvolvido para conectar fornecedores e compradores
          em um único ambiente, simplificando processos de negociação,
          acompanhamento e gestão de pedidos.
        </p>
        <p>
          Explore abaixo como cada perfil interage dentro do sistema e veja como
          a plataforma pode facilitar o dia a dia do seu negócio.
        </p>
      </IntroContainer>
      <DemoContent>
        <Card title="Fornecedor" buttonText="Ver Painel">
          <p>
            Gerencie solicitações e acompanhe suas vendas em tempo real com
            controle total sobre propostas e entregas.
          </p>
        </Card>
        <Card title="Comprador" buttonText="Simular Acesso">
          <p>
            Envie solicitações de compra, compare propostas e gerencie seus
            pedidos com praticidade e transparência.
          </p>
        </Card>
      </DemoContent>
    </div>
  </DemoContainer>
)

export default Demo
