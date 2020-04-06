export default class Item {
  constructor(item) {
    ;(this.pid = item.pid),
      (this.createDate = item.create_date),
      (this.modifyDate = item.modify_date),
      (this.status = item.status),
      (this.productCondition = item.product_condition),
      (this.quantity = item.quantity),
      (this.price = item.price),
      (this.paymentMethod = item.payment_method),
      (this.deliveryMethod = item.delivery_method),
      (this.deliveryCharge = item.delivery_charge),
      (this.title = item.title),
      (this.description = item.description),
      (this.images = item.images),
      (this.tags = item.tags || null),
      (this.user = item.user)
  }
}
