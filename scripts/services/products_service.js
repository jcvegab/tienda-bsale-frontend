import { apiFetch, BASE_URL } from "./api_fetch.js";

function ProductsService() {
  if (!ProductsService.instance) {
    ProductsService.instance = this;
  }
  return ProductsService.instance;
}

ProductsService.prototype.list = () =>
  apiFetch(`${BASE_URL}/products`, {
    method: "GET",
  }).catch((error) => {
    console.error(error);
    return [];
  });

ProductsService.prototype.search = (query) =>
  apiFetch(`${BASE_URL}/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  }).catch((error) => {
    console.error(error);
    return [];
  });

export default ProductsService;
