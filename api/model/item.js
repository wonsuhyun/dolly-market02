export default class Item {
    constructor(item){
        this.pid = item.pid,
        this.create_date = item.create_date,
        this.modify_date = item.modify_date,
        this.status = item.status,
        this.product_condition = item.product_condition,
        this.quantity = item.quantity,
        this.price = item.price,
        this.paymenth_method = item.paymenth_method,
        this.delivery_method = item.delivery_method,
        this.delivery_charge = item.delivery_charge,
        this.title = item.title,
        this.description = item.description,
        this.images = item.images,
        this.tags = item.tags || [],
        this.user = item.user
    }
}