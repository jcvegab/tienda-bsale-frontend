export default function Product(parentSelector, productData) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.data = productData;

  this.toString = function () {
    return `
    <div class="w-full">
      <li class="js-product-${
        this.data.id
      } block select-none overflow-hidden rounded-lg shadow-lg h-full">
        <div class="relative cursor-pointer flex justify-center h-full max-h-80">
          ${
            this.data.discount !== 0
              ? `<span class="
          absolute
          top-2
          right-2
          bg-gray-600
          rounded
          px-1.5
          py-1
          text-center text-white
        ">${this.data.discount + '% Dsct.'}</span>`
              : ''
          }
          <img src="${
            this.data.url_image ||
            'https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg'
          }" alt="${
      this.data.name
    }" class="block h-auto w-full object-contain"></img>
        </div>
        <div class="p-3 bg-gray-300 h-full">
          <h3 class="font-semibold">${this.data.name}</h3>
          <span${
            this.data.discount !== 0 ? ` class="line-through text-red-600"` : ''
          }>$${this.data.price / 100}</span>
          ${
            this.data.discount !== 0
              ? `<span ${
                  this.data.discount !== 0
                    ? ` class="text-green-600 font-semibold"`
                    : ''
                }>$${
                  (this.data.price * (100 - this.data.discount)) / 10000
                }</span>`
              : ''
          }
          <div class="options">
            <a class="js-add-product-${
              this.data.id
            }" href="#add"><i class="fa fa-plus"></i></a>
          </div>
        </div>
      </li>
    </div>
    `;
  };
}
