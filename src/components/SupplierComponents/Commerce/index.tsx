import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../../utils/enums/CommerceStatus'
import {
  confirmRequest,
  rejectRequest,
  startSale,
  concludeSale
} from '../../../store/reducers/CommerceSlice'
import { parseToBrl, getCommerceLabel, getOverflow } from '../../../utils'
import { CommerceContainer } from './styles'
import ViewDescription from '../../ViewDescription'

const Commerce = ({
  id,
  title,
  description,
  saleValue,
  status,
  operationType,
  isSupplier
}: CommerceProps) => {
  const dispatch = useDispatch()
  const [viewModal, setViewModal] = useState<ModalState>({ isVisible: false })

  const openViewModal = () => setViewModal({ isVisible: true })
  const closeViewModal = () => setViewModal({ isVisible: false })

  const handleConfirm = () => dispatch(confirmRequest(id))
  const handleReject = () => dispatch(rejectRequest(id))
  const handleStart = () => dispatch(startSale(id))
  const handleConclude = () => dispatch(concludeSale(id))

  const RequestPending =
    operationType === enums.CommerceType.REQUEST &&
    status === enums.CommerceStatus.PENDING

  const RequestConcluded =
    operationType === enums.CommerceType.REQUEST &&
    status === enums.CommerceStatus.CONCLUDED

  const SaleInProgress =
    operationType === enums.CommerceType.SALE &&
    status === enums.CommerceStatus.IN_PROGRESS

  return (
    <>
      <CommerceContainer>
        <p title={title}>{getOverflow(title)}</p>
        <button type="button" onClick={openViewModal}>
          Ver
        </button>
        <p>{parseToBrl(saleValue)}</p>
        <p>{getCommerceLabel(operationType, isSupplier)}</p>
        <p>{status}</p>
        {RequestPending && (
          <>
            <button onClick={handleConfirm}>Confirmar</button>
            <button onClick={handleReject}>Rejeitar</button>
          </>
        )}
        {RequestConcluded && (
          <>
            <button onClick={handleStart}>Iniciar Venda</button>
          </>
        )}
        {SaleInProgress && (
          <>
            <button onClick={handleConclude}>Concluir</button>
          </>
        )}
      </CommerceContainer>
      <ViewDescription
        isVisible={viewModal.isVisible}
        onClose={closeViewModal}
        description={description}
      />
    </>
  )
}

export default Commerce
