import { useSelector } from 'react-redux'
import CommerceList from '../../components/BuyerComponents/CommerceList'
import HeaderList from '../../components/BuyerComponents/HeaderList'
import SideBar from '../../components/BuyerComponents/SideBar'
import { Container, MainContainer } from '../../globalStyles'
import { RootReducer } from '../../store'
import { CommerceStatus } from '../../utils/enums/CommerceStatus'

const BuyerPageDemo = () => {
  const { items } = useSelector((state: RootReducer) => state.commerce)
  const { value, term } = useSelector((state: RootReducer) => state.filter)

  const filteredItems = items.filter((item) => {
    const termLowerCase = term?.toLowerCase() ?? ''

    const termMatch =
      !termLowerCase ||
      item.title.toLowerCase().includes(termLowerCase) ||
      item.description.toLowerCase().includes(termLowerCase) ||
      item.status.toLowerCase().includes(termLowerCase) ||
      String(item.saleValue).replace('.', ',').includes(termLowerCase)

    const sectionMatch =
      value === CommerceStatus.ALL ||
      (value === CommerceStatus.ALL_REQUESTS &&
        item.operationType === 'REQUEST') ||
      (value === CommerceStatus.ALL_SALES && item.operationType === 'SALE') ||
      item.status === value

    return sectionMatch && termMatch
  })

  return (
    <Container>
      <SideBar />
      <MainContainer>
        <HeaderList filteredItems={filteredItems} />
        <CommerceList filteredItems={filteredItems} />
      </MainContainer>
    </Container>
  )
}

export default BuyerPageDemo
