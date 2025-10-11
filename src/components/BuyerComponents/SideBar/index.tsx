import { useDispatch, useSelector } from 'react-redux'
import SideButton from '../../SupplierComponents/SideButton'
import * as enums from '../../../utils/enums/CommerceStatus'
import { RootReducer } from '../../../store'
import { changeFilter } from '../../../store/reducers/FilterSlice'
import AddButton from '../../AddButton'
import { Aside, AsideTitle, Title, AddButtonContainer } from './styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state: RootReducer) => state)

  const activeSection = ({ criterion, value }: FilterState) =>
    filter.criterion === criterion && filter.value === value

  const handleFilterChange = ({ criterion, value }: FilterState) => {
    dispatch(changeFilter({ criterion, value }))
  }

  return (
    <Aside>
      <AsideTitle>DB Compradores</AsideTitle>

      <div>
        <SideButton
          isActive={activeSection({ criterion: 'tudo' })}
          onClick={() => handleFilterChange({ criterion: 'tudo' })}
        >
          Tudo
        </SideButton>
      </div>
      <Title>Requisições</Title>
      <div>
        <SideButton
          isActive={activeSection({
            criterion: 'status',
            value: enums.CommerceStatus.PENDING
          })}
          onClick={() =>
            handleFilterChange({
              criterion: 'status',
              value: enums.CommerceStatus.PENDING
            })
          }
        >
          Pendentes
        </SideButton>
        <SideButton
          isActive={activeSection({
            criterion: 'status',
            value: enums.CommerceStatus.REJECTED
          })}
          onClick={() =>
            handleFilterChange({
              criterion: 'status',
              value: enums.CommerceStatus.REJECTED
            })
          }
        >
          Rejeitadas
        </SideButton>
        <SideButton
          isActive={activeSection({
            criterion: 'status',
            value: enums.CommerceStatus.CONFIRMED
          })}
          onClick={() =>
            handleFilterChange({
              criterion: 'status',
              value: enums.CommerceStatus.CONFIRMED
            })
          }
        >
          Confirmadas
        </SideButton>
        <SideButton
          isActive={activeSection({
            criterion: 'tipo',
            value: enums.CommerceType.REQUEST
          })}
          onClick={() =>
            handleFilterChange({
              criterion: 'tipo',
              value: enums.CommerceType.REQUEST
            })
          }
        >
          Todas
        </SideButton>
      </div>

      <Title>Compras</Title>
      <div>
        <SideButton
          isActive={activeSection({
            criterion: 'status',
            value: enums.CommerceStatus.IN_PROGRESS
          })}
          onClick={() =>
            handleFilterChange({
              criterion: 'status',
              value: enums.CommerceStatus.IN_PROGRESS
            })
          }
        >
          Em andamento
        </SideButton>
        <SideButton
          isActive={activeSection({
            criterion: 'status',
            value: enums.CommerceStatus.CONCLUDED
          })}
          onClick={() =>
            handleFilterChange({
              criterion: 'status',
              value: enums.CommerceStatus.CONCLUDED
            })
          }
        >
          Concluídas
        </SideButton>
        <SideButton
          isActive={activeSection({
            criterion: 'tipo',
            value: enums.CommerceType.SALE
          })}
          onClick={() =>
            handleFilterChange({
              criterion: 'tipo',
              value: enums.CommerceType.SALE
            })
          }
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
