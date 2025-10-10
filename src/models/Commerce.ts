import { CommerceStatus } from '../utils/enums/CommerceStatus'

class SupplierCommerce {
  id: number
  title: string
  description: string
  saleValue: number
  status: CommerceStatus
  operationType: 'REQUEST' | 'SALE'

  constructor(
    id: number,
    title: string,
    description: string,
    saleValue: number,
    status: CommerceStatus,
    operationType: 'REQUEST' | 'SALE'
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.saleValue = saleValue
    this.status = status
    this.operationType = operationType
  }
}

export default SupplierCommerce
