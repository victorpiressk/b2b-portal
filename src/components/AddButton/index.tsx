import { useState } from 'react'
import { Circle } from './styles'
import AddCommerce from '../AddCommerce'

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
