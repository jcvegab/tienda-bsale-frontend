export default function Product(parentSelector, productData) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.data = productData;
  this.toString = function () {
    return `
    <li class="js-product-${
      this.data.id
    } block shadow rounded-2xl select-none overflow-hidden">
      <div class="relative p-3 cursor-pointer">
        <span class="
        sticky
        right-0
        bg-gray-600
        rounded
        px-1.5
        py-1
        text-center text-white
      ">${this.data.discount + '% Dsct.'}</span>
        <img src="${
          this.data.url_image ||
          'https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg'
        }"></img>
      </div>
      <div class="bg-gray-300">
        <h3>${this.data.name}</h3>
        <span>${this.data.price}</span>
        <span>${(this.data.price * (100 - this.data.discount)) / 100}</span>
        <div class="options">
          <a class="js-add-product-${
            this.data.id
          }" href="#add"><i class="fa fa-plus"></i></a>
        </div>
      </div>
    </li>
    `;
  };
}
