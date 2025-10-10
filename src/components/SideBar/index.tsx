import { useDispatch, useSelector } from 'react-redux'
import SideButton from '../SideButton'
import { CommerceStatus } from '../../utils/enums/PanelSection'
import { RootReducer } from '../../store'
import { setActiveSection } from '../../store/reducers/SupplierFilterSlice'
import { Aside, AsideTitle } from './styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const activeSection = useSelector(
    (state: RootReducer) => state.supplierFilter.activeSection
  )

  return (
    <Aside>
      <AsideTitle>Dashboard</AsideTitle>
      <h3>Solicitações</h3>
      <div>
        <SideButton
          isActive={activeSection === CommerceStatus.REQUEST_PENDING}
          onClick={() =>
            dispatch(setActiveSection(CommerceStatus.REQUEST_PENDING))
          }
        >
          Pendentes
        </SideButton>
        <SideButton
          isActive={activeSection === CommerceStatus.REQUEST_REJECTED}
          onClick={() =>
            dispatch(setActiveSection(CommerceStatus.REQUEST_REJECTED))
          }
        >
          Rejeitadas
        </SideButton>
        <SideButton
          isActive={activeSection === CommerceStatus.REQUEST_CONFIRMED}
          onClick={() =>
            dispatch(setActiveSection(CommerceStatus.REQUEST_CONFIRMED))
          }
        >
          Confirmadas
        </SideButton>
      </div>
      <h3>Vendas</h3>
      <div>
        <SideButton
          isActive={activeSection === CommerceStatus.SALE_IN_PROGRESS}
          onClick={() =>
            dispatch(setActiveSection(CommerceStatus.SALE_IN_PROGRESS))
          }
        >
          Em andamento
        </SideButton>
        <SideButton
          isActive={activeSection === CommerceStatus.SALE_CONCLUDED}
          onClick={() =>
            dispatch(setActiveSection(CommerceStatus.SALE_CONCLUDED))
          }
        >
          Concluídas
        </SideButton>
      </div>
    </Aside>
  )
}

export default SideBar
