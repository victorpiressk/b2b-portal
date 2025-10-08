import Card from '../Card'
import { DemoContainer, DemoContent } from './styles'

const Demo = () => (
  <DemoContainer>
    <div className="container">
      <h2>Experimente o Portal BBS</h2>
      <DemoContent>
        <Card title="Acessar como Fornecedor">
          <p>
            No portal, o fornecedor tem acesso a um painel completo para
            acompanhar todas as solicitações recebidas, gerenciar propostas
            comerciais e monitorar o status de suas vendas em tempo real.
          </p>
          <p>
            É possível visualizar o histórico de transações, responder a pedidos
            de cotação e manter o controle sobre entregas e pagamentos de forma
            centralizada e prática.
          </p>
          <p>
            O ambiente foi projetado para otimizar a comunicação com compradores
            e simplificar o processo de negociação B2B.
          </p>
        </Card>
        <Card title="Acessar como Comprador">
          <p>
            O comprador conta com um ambiente intuitivo para registrar novas
            solicitações de compra, acompanhar o andamento de seus pedidos e
            receber propostas de fornecedores de maneira organizada.
          </p>
          <p>
            O portal oferece uma visão consolidada de todas as transações,
            permitindo comparar ofertas, avaliar fornecedores e gerenciar suas
            compras com transparência e agilidade.
          </p>
          <p>
            Tudo em um só lugar, com foco em facilitar decisões de compra e
            fortalecer parcerias comerciais.
          </p>
        </Card>
      </DemoContent>
    </div>
  </DemoContainer>
)

export default Demo
