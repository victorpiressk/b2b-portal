declare type ButtonProps = {
  type: 'button' | 'link' | 'submit'
  buttonTitle: string
  to?: string
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
}

declare type ModalProps = {
  isVisible: boolean
  onClose?: () => void
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

declare type CommerceProps = SupplierCommerce & {
  isSupplier: boolean
}

declare type FilterState = {
  term?: string
  criterion: 'status' | 'tipo' | 'tudo'
  value?: enums.CommerceStatus | enums.CommerceType
}
