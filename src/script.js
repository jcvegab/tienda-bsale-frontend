import STORE from './scripts/store.js';
import Home from './scripts/home.js';
import CategoriesService from './scripts/services/categories_service.js';
import ProductsService from './scripts/services/products_service.js';

async function init() {
  const home = new Home('.js-app');
  const categoriesService = new CategoriesService();
  STORE.categories = await categoriesService.list();
  const productsService = new ProductsService();
  STORE.products = await productsService.list();
  home.render();
}

init();
