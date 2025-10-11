import * as enums from './enums/CommerceStatus'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getCommerceLabel = (
  type: enums.CommerceType,
  isSupplier: boolean
) => {
  switch (type) {
    case enums.CommerceType.SALE:
      return isSupplier ? 'Venda' : 'Compra'
    default:
      return 'Solicitação'
  }
}

export const getOverflow = (value: string) => {
  if (value.length > 34) {
    return value.slice(0, 34) + '...'
  }

  return value
}
