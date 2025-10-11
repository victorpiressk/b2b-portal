import { useState } from 'react'
import AddCommerce from '../AddCommerce'
import { Circle } from './styles'

const AddButton = () => {
  const [addCommerceModal, setAddCommerceModal] = useState<ModalState>({
    isVisible: false
  })

  const openCommerceModal = () => setAddCommerceModal({ isVisible: true })
  const closeCommerceModal = () => setAddCommerceModal({ isVisible: false })

  return (
    <>
      <Circle onClick={openCommerceModal}>+</Circle>
      <AddCommerce
        isVisible={addCommerceModal.isVisible}
        onClose={closeCommerceModal}
      />
    </>
  )
}

export default AddButton
