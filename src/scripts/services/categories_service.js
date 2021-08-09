import { apiFetch, BASE_URL } from './api_fetch.js';

function CategoriesService() {
  if (!CategoriesService.instance) {
    CategoriesService.instance = this;
  }
  return CategoriesService.instance;
}

CategoriesService.prototype.list = () =>
  apiFetch(`${BASE_URL}/categories`, {
    method: 'GET',
  });

CategoriesService.prototype.listProductsByCategory = (id) =>
  apiFetch(`${BASE_URL}/categories/${id}/products`, {
    method: 'GET',
  });

export default CategoriesService;
