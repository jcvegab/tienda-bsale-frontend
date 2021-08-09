export default function Category(parentSelector, categoryData) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.data = categoryData;

  this.toString = function () {
    return `
      <li class="js-category-${this.data.id} select-none rounded-lg shadow-lg cursor-pointer">
        <span class="text-2xl font-bold">${this.data.name}</span>
      </li>
    `;
  };
}
