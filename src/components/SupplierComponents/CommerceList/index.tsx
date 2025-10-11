import Commerce from '../Commerce'
import { ContainerList } from './styles'

const CommerceList = ({ filteredItems }: ListProps) => (
  <ContainerList>
    <ul>
      {filteredItems.map((c) => (
        <li key={c.id}>
          <Commerce
            id={c.id}
            title={c.title}
            description={c.description}
            saleValue={c.saleValue}
            status={c.status}
            operationType={c.operationType}
            isSupplier={true}
          />
        </li>
      ))}
    </ul>
  </ContainerList>
)

export default CommerceList
