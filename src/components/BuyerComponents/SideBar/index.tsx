import { useDispatch, useSelector } from 'react-redux'
import SideButton from '../../SupplierComponents/SideButton'
import { CommerceStatus } from '../../../utils/enums/CommerceStatus'
import { RootReducer } from '../../../store'
import { changeFilter } from '../../../store/reducers/FilterSlice'
import { Aside, AsideTitle, Title, AddButtonContainer } from './styles'
import AddButton from '../../AddButton'

const SideBar = () => {
  const dispatch = useDispatch()
  const activeSection = useSelector((state: RootReducer) => state.filter.value)

  return (
    <Aside>
      <AsideTitle>DB Compradores</AsideTitle>

      <div>
        <SideButton
          isActive={activeSection === CommerceStatus.ALL}
          onClick={() => dispatch(changeFilter(CommerceStatus.ALL))}
        >
          Tudo
        </SideButton>
      </div>
      <Title>Requisições</Title>
      <div>
        <SideButton
          isActive={activeSection === CommerceStatus.REQUEST_PENDING}
          onClick={() => dispatch(changeFilter(CommerceStatus.REQUEST_PENDING))}
        >
          Pendentes
        </SideButton>
        <SideButton
          isActive={activeSection === CommerceStatus.REQUEST_REJECTED}
          onClick={() =>
            dispatch(changeFilter(CommerceStatus.REQUEST_REJECTED))
          }
        >
          Rejeitadas
        </SideButton>
        <SideButton
          isActive={activeSection === CommerceStatus.REQUEST_CONFIRMED}
          onClick={() =>
            dispatch(changeFilter(CommerceStatus.REQUEST_CONFIRMED))
          }
        >
          Confirmadas
        </SideButton>
        <SideButton
          isActive={activeSection === CommerceStatus.ALL_REQUESTS}
          onClick={() => dispatch(changeFilter(CommerceStatus.ALL_REQUESTS))}
        >
          Todas
        </SideButton>
      </div>

      <Title>Compras</Title>
      <div>
        <SideButton
          isActive={activeSection === CommerceStatus.SALE_IN_PROGRESS}
          onClick={() =>
            dispatch(changeFilter(CommerceStatus.SALE_IN_PROGRESS))
          }
        >
          Em andamento
        </SideButton>
        <SideButton
          isActive={activeSection === CommerceStatus.SALE_CONCLUDED}
          onClick={() => dispatch(changeFilter(CommerceStatus.SALE_CONCLUDED))}
        >
          Concluídas
        </SideButton>
        <SideButton
          isActive={activeSection === CommerceStatus.ALL_SALES}
          onClick={() => dispatch(changeFilter(CommerceStatus.ALL_SALES))}
        >
          Todas
        </SideButton>
      </div>
      <AddButtonContainer>
        <AddButton />
      </AddButtonContainer>
    </Aside>
  )
}

export default SideBar
