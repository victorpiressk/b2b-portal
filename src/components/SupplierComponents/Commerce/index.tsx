import { useState } from 'react'
import { useDispatch } from 'react-redux'
import SupplierCommerce from '../../../models/Commerce'
import { CommerceStatus } from '../../../utils/enums/CommerceStatus'
import {
  confirmRequest,
  rejectRequest,
  startSale,
  concludeSale
} from '../../../store/reducers/CommerceSlice'
import { parseToBrl } from '../../../utils'
import { CommerceContainer } from './styles'
import ViewDescription from '../../ViewDescription'

const Commerce = ({
  id,
  title,
  description,
  saleValue,
  status
}: SupplierCommerce) => {
  const dispatch = useDispatch()
  const [viewModal, setViewModal] = useState<ModalState>({ isVisible: false })

  const openViewModal = () => setViewModal({ isVisible: true })
  const closeViewModal = () => setViewModal({ isVisible: false })

  const handleConfirm = () => dispatch(confirmRequest(id))
  const handleReject = () => dispatch(rejectRequest(id))
  const handleStart = () => dispatch(startSale(id))
  const handleConclude = () => dispatch(concludeSale(id))

  return (
    <>
      <CommerceContainer>
        <p>{title}</p>
        <button type="button" onClick={openViewModal}>
          Ver
        </button>
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
      <ViewDescription
        isVisible={viewModal.isVisible}
        onClose={closeViewModal}
        description={description}
      />
    </>
  )
}

export default Commerce
