import * as enums from '../utils/enums/CommerceStatus'

class SupplierCommerce {
  id: number
  title: string
  description: string
  saleValue: number
  status: enums.CommerceStatus
  operationType: enums.CommerceType

  constructor(
    id: number,
    title: string,
    description: string,
    saleValue: number,
    status: enums.CommerceStatus,
    operationType: enums.CommerceType
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
