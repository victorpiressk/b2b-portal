import { useState } from 'react'
import ViewDescription from '../../ViewDescription'
import { parseToBrl, getCommerceLabel, getOverflow } from '../../../utils'
import { useDeleteMutation } from '../../../services/api'
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
  const [deleteCommerce] = useDeleteMutation()
  const [viewModal, setViewModal] = useState<ModalState>({ isVisible: false })

  const openViewModal = () => setViewModal({ isVisible: true })
  const closeViewModal = () => setViewModal({ isVisible: false })

  const handleDelete = async () => {
    try {
      await deleteCommerce(id).unwrap()
      console.log('ID a deletado com sucesso:', id)
    } catch (error) {
      console.log('ID a deletar:', id)
      console.log('Tipo do id:', typeof id)
      console.error('Erro ao deletar:', error)
    }
  }

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
            <button onClick={handleDelete}>Cancelar</button>
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
