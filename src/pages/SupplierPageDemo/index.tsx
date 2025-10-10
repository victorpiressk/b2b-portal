import { useSelector } from 'react-redux'
import CommerceList from '../../components/CommerceList'
import HeaderList from '../../components/HeaderList'
import SideBar from '../../components/SideBar'
import { Container, MainContainer } from '../../globalStyles'
import { RootReducer } from '../../store'
import { CommerceStatus } from '../../utils/enums/PanelSection'

const SupplierPageDemo = () => {
  const { items } = useSelector((state: RootReducer) => state.supplierList)
  const { activeSection, term } = useSelector(
    (state: RootReducer) => state.supplierFilter
  )

  const filteredItems = items.filter((item) => {
    const sectionMatch =
      activeSection === CommerceStatus.REQUEST_PENDING
        ? item.status === CommerceStatus.REQUEST_PENDING
        : activeSection === CommerceStatus.REQUEST_CONFIRMED
          ? item.status === CommerceStatus.REQUEST_CONFIRMED
          : activeSection === CommerceStatus.REQUEST_REJECTED
            ? item.status === CommerceStatus.REQUEST_REJECTED
            : activeSection === CommerceStatus.SALE_IN_PROGRESS
              ? item.status === CommerceStatus.SALE_IN_PROGRESS
              : activeSection === CommerceStatus.SALE_CONCLUDED
                ? item.status === CommerceStatus.SALE_CONCLUDED
                : true

    const termLowerCase = term?.toLowerCase() ?? ''
    const termMatch =
      !term ||
      term.trim() === '' ||
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      item.description.toLowerCase().includes(term.toLowerCase()) ||
      item.status.toLowerCase().includes(term.toLowerCase()) ||
      String(item.saleValue).replace('.', ',').includes(termLowerCase)

    return sectionMatch && termMatch
  })

  return (
    <div className="container">
      <Container>
        <SideBar />
        <MainContainer>
          <HeaderList filteredItems={filteredItems} />
          <CommerceList filteredItems={filteredItems} />
        </MainContainer>
      </Container>
    </div>
  )
}

export default SupplierPageDemo
