import { useDispatch, useSelector } from 'react-redux'
import SideButton from '../../SupplierComponents/SideButton'
import AddButton from '../../AddButton'
import { RootReducer } from '../../../store'
import { changeFilter } from '../../../store/reducers/FilterSlice'
import * as enums from '../../../utils/enums/CommerceStatus'
import * as S from './styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const { filter } = useSelector((state: RootReducer) => state)

  const activeSection = ({ criterion, value }: FilterState) =>
    filter.criterion === criterion && filter.value === value

  const handleFilterChange = ({ criterion, value }: FilterState) => {
    dispatch(changeFilter({ criterion, value }))
  }

  return (
    <S.Aside>
      <S.AsideTitle>DB Compradores</S.AsideTitle>

      <div>
        <SideButton
          isActive={activeSection({ criterion: 'tudo' })}
          onClick={() => handleFilterChange({ criterion: 'tudo' })}
        >
          Tudo
        </SideButton>
      </div>
      <S.Title>Requisições</S.Title>
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

      <S.Title>Compras</S.Title>
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
      <S.AddButtonContainer>
        <AddButton />
      </S.AddButtonContainer>
    </S.Aside>
  )
}

export default SideBar
