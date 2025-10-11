import { ContainerList } from './styles'
import Commerce from '../Commerce'

const CommerceList = ({ filteredItems }: ListProps) => {
  return (
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
              isSupplier={false}
            />
          </li>
        ))}
      </ul>
    </ContainerList>
  )
}

export default CommerceList
