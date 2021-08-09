import STORE from './store.js';
import Category from './categories.js';
import Product from './product.js';
import ProductsService from './services/products_service.js';

export default function Home(parentSelector) {
  if (!Home.instance) {
    this.parentSelector = parentSelector;
    this.parentElement = document.querySelector(parentSelector);
    this.allowedClasses = { categories: Category, products: Product };
    this.toString = function () {
      return `
      <header class="h-12 bg-gray-300 shadow flex justify-center">
      <div class="w-4/5 flex justify-between items-center">
        <a href="/">
          <h1 class="text-xl">Bsale | Tienda Online</h1>
        </a>
        <div class="relative">
          <input
            type="search"
            name="query"
            class="w-96 px-2 py-1 rounded z-0 focus:shadow focus:outline-none js-search-bar"
            placeholder="Busca tu producto aquí..."
          />
          <div class="absolute top-1 right-3 cursor-pointer">
            <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500 js-search-button"></i>
          </div>
        </div>
        <div class="relative cursor-pointer">
          <i
            class="
              fa fa-shopping-cart
              text-xl text-gray-500
              hover:text-gray-400
            "
          ></i>
          <span
            class="
              absolute
              -top-1
              bg-gray-600
              rounded-full
              px-1
              py-0.5
              text-xs text-center text-white
            "
            >10</span
          >
        </div>
      </div>
    </header>
    <main class="m-auto px-8">
      <div class="my-4" >
        <div>
          <h2 class="text-3xl font-bold text-gray-900">Categorías</h2>
          <ul class="js-categories-container my-8 flex gap-4"></ul>
        </div>
        <div>
          <h2 class="text-3xl font-bold text-gray-900">Productos</h2>
          <section class="container my-8 mx-auto px-4 md:px-12">
            <ul class="js-products-container grid gap-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2"></ul>
          </section>
        </div>
      </div>
    </main>
    <footer class="h-10 bg-gray-300 flex justify-center items-center">
      <p>
        Tienda Online - Bsale | Todos los izquierdos reservados &copy; 2021.
      </p>
    </footer>
      `;
    };
    Home.instance = this;
  }
  return Home.instance;
}

Home.prototype.generateElements = function (parentSelector, selectedElement) {
  const container = this.parentElement.querySelector(parentSelector);
  const elements = STORE[selectedElement].map((elementData) => {
    return new this.allowedClasses[selectedElement](
      parentSelector,
      elementData
    );
  });
  container.innerHTML = elements.join('');
  return elements;
};

Home.prototype.searchProducts = function (inputSelector, buttonSelector) {
  const searchInput = this.parentElement.querySelector(inputSelector);
  const searchButton = this.parentElement.querySelector(buttonSelector);
  searchButton.addEventListener('click', async (e) => {
    const productsService = new ProductsService();
    const query = searchInput.value;
    try {
      const searchProducts = await productsService.search(query);
      STORE.products = [...searchProducts];
      this.render();
    } catch (e) {
      alert(e.message);
    }
  });
};

Home.prototype.render = function () {
  this.parentElement.innerHTML = this;
  this.searchProducts('.js-search-bar', '.js-search-button');
  const categories = this.generateElements(
    '.js-categories-container',
    'categories'
  );
  categories.forEach((category) => {
    category.listenSelectClick();
  });
  this.generateElements('.js-products-container', 'products');
};
