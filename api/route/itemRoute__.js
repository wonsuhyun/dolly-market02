const BooksListController = require('../../controllers/booksListController');
const RoutesBase = require('./routesBase');

class BooksListRoutes extends RoutesBase {
  constructor() {
    super(BooksListController);
  }

  getRoutes() {
    this.addRoute('/books', 'get', this.controller.getBooks)
  }
}

module.exports = BooksListRoutes;