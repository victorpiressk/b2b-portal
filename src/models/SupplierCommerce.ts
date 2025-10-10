import { CommerceStatus } from '../utils/enums/PanelSection'

class SupplierCommerce {
  id: number
  title: string
  description: string
  saleValue: number
  status: CommerceStatus

  constructor(
    id: number,
    title: string,
    description: string,
    saleValue: number,
    status: CommerceStatus
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.saleValue = saleValue
    this.status = status
  }
}

export default SupplierCommerce
