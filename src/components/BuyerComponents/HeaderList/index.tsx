import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import { changeTerm } from '../../../store/reducers/FilterSlice'
import * as S from './styles'
import searchIcon from '../../../assets/images/search.svg'

const HeaderList = ({ filteredItems }: ListProps) => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.HeadeContainer>
      <S.HeaderContent>
        <h3>{filteredItems.length} - resultado(s) encontrado(s)</h3>
        <div>
          <S.Label htmlFor="search">
            <img src={searchIcon} />
            <S.Input
              type="text"
              id="search"
              placeholder="Pesquisar"
              value={term}
              onChange={(e) => dispatch(changeTerm(e.target.value))}
            />
          </S.Label>
        </div>
      </S.HeaderContent>
      <S.ListTitleContainer>
        <h4>Titulo</h4>
        <h4>Descrição</h4>
        <h4>Valor</h4>
        <h4>Etapa</h4>
        <h4>Status</h4>
      </S.ListTitleContainer>
    </S.HeadeContainer>
  )
}

export default HeaderList
