import { ItemService } from '../service'
import RouteBase from './routeBase'
import { methods, paths } from '../constant'

const itemService = new ItemService()

class ItemRoute extends RouteBase {
  constructor() {
    // Todo: this.service라고 찍으면 왜 안되는 것인지???
    super(paths.ITEMS, itemService)
  }

  addRoutes() {
    this.addRoute('/', methods.GET, this.getItems)
    this.addRoute('/:pid', methods.GET, this.getItemById)
  }

  // Todo: 컨트롤러로 빼기
  async getItems(req, res) {
    const pageNum = req.query.pageNum
    const items = await itemService.getItems(pageNum)
    res.json(items)
  }

  async getItemById(req, res) {
    const { pid } = req.params
    const item = await itemService.getItemById(pid)
    res.json(item)
  }

}

export default ItemRoute