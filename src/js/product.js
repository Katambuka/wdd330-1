/* eslint-disable no-undef */
import { getParam, loadHeaderFooter } from './utils.mjs';
import productDetails from './productDetails.mjs';

//loadHeaderFooter for product_pages/index.html
async function init() {
  await loadHeaderFooter();

  const productId = getParam('product');
  productDetails(productId);

  document.getElementById('addToCart').addEventListener('click', addToCart);
}

init();
