import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../../utils/enums/CommerceStatus'
import { removeCommerce } from '../../../store/reducers/CommerceSlice'
import { parseToBrl, getCommerceLabel, getOverflow } from '../../../utils'
import ViewDescription from '../../ViewDescription'
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

  const handleCancel = () => dispatch(removeCommerce(id))

  const RequestPending =
    operationType === enums.CommerceType.REQUEST &&
    status === enums.CommerceStatus.PENDING

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
            <button onClick={handleCancel}>Cancelar</button>
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
