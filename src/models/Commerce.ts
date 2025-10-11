import { CommerceStatus, CommerceType } from '../utils/enums/CommerceStatus'

class SupplierCommerce {
  id: number
  title: string
  description: string
  saleValue: number
  status: CommerceStatus
  operationType: CommerceType

  constructor(
    id: number,
    title: string,
    description: string,
    saleValue: number,
    status: CommerceStatus,
    operationType: CommerceType
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
