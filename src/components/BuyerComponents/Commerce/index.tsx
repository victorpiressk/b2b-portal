import { useState } from 'react'
import { useDispatch } from 'react-redux'
import SupplierCommerce from '../../../models/Commerce'
import { CommerceStatus } from '../../../utils/enums/CommerceStatus'
import { removeCommerce } from '../../../store/reducers/CommerceSlice'
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

  const handleCancel = () => dispatch(removeCommerce(id))

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
