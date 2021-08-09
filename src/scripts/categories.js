import Home from './home.js';
import ProductsService from './services/products_service.js';

export default function Category(parentSelector, categoryData) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.data = categoryData;

  this.toString = function () {
    return `
      <li class="js-category-${this.data.id} px-2 py-1 select-none rounded-lg shadow-lg cursor-pointer bg-gray-700">
        <span class="text-2xl font-bold text-white">${this.data.name}</span>
      </li>
    `;
  };
}

Category.prototype.listenSelectClick = function () {
  const selectedCategory = this.parentElement.querySelector(
    `.js-category-${this.data.id}`
  );
  selectedCategory.addEventListener('click', async (e) => {
    e.preventDefault();
    const home = new Home();
    const productsService = new ProductsService();
    try {
      const filteredProducts = await productsService.filterProducts(
        this.data.id
      );
      home.render();
    } catch (e) {
      alert(e.message);
    }
  });
};
