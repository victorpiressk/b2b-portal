declare type ButtonProps = {
  type: 'button' | 'link' | 'submit'
  buttonTitle: string
  to?: string
  onClick?: () => void
  children: ReactNode
}

declare type ModalProps = {
  isVisible: boolean
  onClose: () => void
  description?: string
}

declare type ModalState = {
  isVisible: boolean
}

declare type CardProps = {
  cardTitle: string
  children: ReactNode
}

declare type ListProps = {
  filteredItems: SupplierCommerce[]
}
