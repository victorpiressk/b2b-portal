import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ViewDescription from '../../ViewDescription'
import { parseToBrl, getCommerceLabel, getOverflow } from '../../../utils'
import * as reducer from '../../../store/reducers/CommerceSlice'
import * as enums from '../../../utils/enums/CommerceStatus'
import { CommerceContainer } from './styles'

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

  const handleConfirm = () => {
    dispatch(reducer.confirmRequest(id))
    console.log('botão de confirmar clicado')
  }
  const handleReject = () => dispatch(reducer.rejectRequest(id))
  const handleStart = () => dispatch(reducer.startSale(id))
  const handleConclude = () => dispatch(reducer.concludeSale(id))

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
            <button type="button" onClick={handleConfirm}>
              Confirmar
            </button>
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
