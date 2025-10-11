import { useSelector } from 'react-redux'
import CommerceList from '../../components/BuyerComponents/CommerceList'
import HeaderList from '../../components/BuyerComponents/HeaderList'
import SideBar from '../../components/BuyerComponents/SideBar'
import * as GS from '../../globalStyles'
import { RootReducer } from '../../store'
import { useGetCommercesQuery } from '../../services/api'

const BuyerPageDemo = () => {
  const { data: commerce = [], isLoading, isError } = useGetCommercesQuery()
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  if (isLoading) return <p>Carregando...</p>
  if (isError) return <p>Erro ao carregar dados.</p>

  const filteredItems = () => {
    const termLowerCase = term?.trim().toLowerCase() ?? ''

    return commerce.filter((item) => {
      const termMatch =
        !termLowerCase ||
        item.title.toLowerCase().includes(termLowerCase) ||
        item.description.toLowerCase().includes(termLowerCase) ||
        String(item.saleValue).replace('.', ',').includes(termLowerCase)

      let filterMatch = true
      if (criterion === 'status' && value) {
        filterMatch = item.status === value
      } else if (criterion === 'tipo' && value) {
        filterMatch = item.operationType === value
      }

      return termMatch && filterMatch
    })
  }

  return (
    <GS.Container>
      <SideBar />
      <GS.MainContainer>
        <HeaderList filteredItems={filteredItems()} />
        <CommerceList filteredItems={filteredItems()} />
      </GS.MainContainer>
    </GS.Container>
  )
}

export default BuyerPageDemo
