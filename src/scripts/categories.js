import Home from './home.js';
import CategoriesService from './services/categories_service.js';
import STORE from './store.js';

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
    const home = new Home();
    const categoriesService = new CategoriesService();
    try {
      const filteredProducts = await categoriesService.listProductsByCategory(
        this.data.id
      );

      console.log(filteredProducts);
      STORE.products = [...filteredProducts];
      home.render();
    } catch (e) {
      alert(e.message);
    }
  });
};
