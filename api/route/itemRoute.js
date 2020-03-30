import { RouteBase } from '../../server/base'
import { paths } from '../constant'
import { methods } from '../../server/constant'
import { ItemController } from '../controller'

class ItemRoute extends RouteBase {
  constructor() {
    super(paths.ITEMS, ItemController)
  }

  addRoutes() {
    this.addRoute('/', methods.GET, this.controller.getItems)
    this.addRoute('/:pid', methods.GET, this.controller.getItemById)
  }

}

export default ItemRoute