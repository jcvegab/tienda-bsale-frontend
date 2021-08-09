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
