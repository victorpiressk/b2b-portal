import { useSelector } from 'react-redux'
import CommerceList from '../../components/SupplierComponents/CommerceList'
import HeaderList from '../../components/SupplierComponents/HeaderList'
import SideBar from '../../components/SupplierComponents/SideBar'
import { Container, MainContainer } from '../../globalStyles'
import { RootReducer } from '../../store'
import { useGetCommercesQuery } from '../../services/api'

const SupplierPageDemo = () => {
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
    <Container>
      <SideBar />
      <MainContainer>
        <HeaderList filteredItems={filteredItems()} />
        <CommerceList filteredItems={filteredItems()} />
      </MainContainer>
    </Container>
  )
}

export default SupplierPageDemo
