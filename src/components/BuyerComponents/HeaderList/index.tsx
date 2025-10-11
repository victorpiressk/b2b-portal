import { useDispatch, useSelector } from 'react-redux'
import searchIcon from '../../../assets/images/search.svg'
import { RootReducer } from '../../../store'
import {
  HeadeContainer,
  Input,
  Label,
  HeaderContent,
  ListTitleContainer
} from './styles'
import { changeTerm } from '../../../store/reducers/FilterSlice'

const HeaderList = ({ filteredItems }: ListProps) => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <HeadeContainer>
      <HeaderContent>
        <h3>{filteredItems.length} - resultado(s) encontrado(s)</h3>
        <div>
          <Label htmlFor="search">
            <img src={searchIcon} />
            <Input
              type="text"
              id="search"
              placeholder="Pesquisar"
              value={term}
              onChange={(e) => dispatch(changeTerm(e.target.value))}
            />
          </Label>
        </div>
      </HeaderContent>
      <ListTitleContainer>
        <h4>Titulo</h4>
        <h4>Descrição</h4>
        <h4>Valor</h4>
        <h4>Etapa</h4>
        <h4>Status</h4>
      </ListTitleContainer>
    </HeadeContainer>
  )
}

export default HeaderList
