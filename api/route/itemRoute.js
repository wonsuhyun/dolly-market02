import { RouteBase } from '../../server/base'
import { paths } from '../constant'
import { methods } from '../../server/constant'
import { ItemController } from '../controller'

// const itemService = new ItemService()

class ItemRoute extends RouteBase {
  constructor() {
    // Todo: this.service라고 찍으면 왜 안되는 것인지???
    super(paths.ITEMS, ItemController)
  }

  addRoutes() {
    this.addRoute('/', methods.GET, this.controller.getItems)
    this.addRoute('/:pid', methods.GET, this.controller.getItemById)
  }

}

export default ItemRoute