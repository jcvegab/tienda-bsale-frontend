import STORE from './scripts/store.js';
import Home from './scripts/home.js';
import ProductsService from './scripts/services/products_service.js';

async function init() {
  const home = new Home('.js-app');
  const productsService = new ProductsService();
  STORE.products = await productsService.list();
  console.log(STORE.products);
  home.render();
}

init();
