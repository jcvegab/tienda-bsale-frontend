export default function Product(parentSelector, productData) {
  this.parentSelector = parentSelector;
  this.parentElement = document.querySelector(parentSelector);
  this.data = productData;
  this.toString = function () {
    return `
    <li class="js-product-${this.data.id}">
      <span>${this.data.discount + '% Dsct.'}</span>
      <img src="${
        this.data.url_image ||
        'https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg'
      }"></img>
      <h3>${this.data.name}</h3>
      <span>${this.data.price}</span>
      <span>${(this.data.price * (100 - this.data.discount)) / 100}</span>
      <div class="options">
        <a class="js-add-product-${
          this.data.id
        }" href="#add"><i class="fa fa-plus"></i></a>
      </div>
    </li>
    `;
  };
}
