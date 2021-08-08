import { apiFetch, BASE_URL } from './api_fetch.js';

function ProductsService() {
  if (!ProductsService.instance) {
    ProductsService.instance = this;
  }
  return ProductsService.instance;
}

ProductsService.prototype.list = () =>
  apiFetch(`${BASE_URL}/products`, {
    method: 'GET',
  });

export default ProductsService;
