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

ProductsService.prototype.search = (query) =>
  apiFetch(`${BASE_URL}/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

export default ProductsService;
