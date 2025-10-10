import { useDispatch } from 'react-redux'
import SupplierCommerce from '../../models/SupplierCommerce'
import { CommerceStatus } from '../../utils/enums/PanelSection'
import {
  confirmRequest,
  rejectRequest,
  startSale,
  concludeSale
} from '../../store/reducers/SupplierListSlice'
import { parseToBrl } from '../../utils'
import { CommerceContainer } from './styles'

const Commerce = ({
  id,
  title,
  description,
  saleValue,
  status
}: SupplierCommerce) => {
  const dispatch = useDispatch()

  const handleConfirm = () => dispatch(confirmRequest(id))
  const handleReject = () => dispatch(rejectRequest(id))
  const handleStart = () => dispatch(startSale(id))
  const handleConclude = () => dispatch(concludeSale(id))

  return (
    <CommerceContainer>
      <p>{title}</p>
      <p>{description}</p>
      <p>{parseToBrl(saleValue)}</p>
      <p>{status}</p>
      {status === CommerceStatus.REQUEST_PENDING && (
        <>
          <button onClick={handleConfirm}>Confirmar</button>
          <button onClick={handleReject}>Rejeitar</button>
        </>
      )}
      {status === CommerceStatus.REQUEST_CONFIRMED && (
        <>
          <button onClick={handleStart}>Iniciar Venda</button>
        </>
      )}
      {status === CommerceStatus.SALE_IN_PROGRESS && (
        <>
          <button onClick={handleConclude}>Concluir</button>
        </>
      )}
    </CommerceContainer>
  )
}

export default Commerce
