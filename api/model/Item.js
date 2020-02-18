export default class Item {
    constructor(pid, create_date, modify_date, status, product_condition, quantity, price, paymenth_method, delivery_method, delivery_charge, title, description){
        this.pid = pid,
        this.create_date = create_date,
        this.modify_date = modify_date,
        this.status = status,
        this.product_condition = product_condition,
        this.quantity = quantity,
        this.price = price,
        this.paymenth_method = paymenth_method,
        this.delivery_method = delivery_method,
        this.delivery_charge = delivery_charge,
        this.title = title,
        this.description = description
    }
}