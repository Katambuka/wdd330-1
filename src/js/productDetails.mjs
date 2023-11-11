import { findProductById } from './productData.mjs';
import { setLocalStorage } from './utils.mjs';

let product = {};

export default async function productDetails(productId) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  // once we have the product details we can render out the HTML
  renderProductDetails();
  // once the HTML is rendered we can add a listener to Add to Cart button
  document.getElementById('addToCart').addEventListener('click', addToCart);
}
function addToCart() {
  setLocalStorage('so-cart', product);
}

/**function renderProductDetails() {
    document.querySelector('#productName').innerText = product.Brand.Name;
    document.querySelector('#productNameWithoutBrand').innerText = product.NameWithoutBrand;
    document.querySelector('#productImage').src = product.Image;
    document.querySelector('#productImage').alt = product.Name;
    document.querySelector('#productFinalPrice').innerText = product.FinalPrice;
    document.querySelector('#productColorName').innerText = product.Colors[0].ColorName;
    document.querySelector('#productDescriptionHtmlSimple').innerHTML = product.DescriptionHtmlSimple;
    document.querySelector('#addToCart').dataset.id = product.Id;
}

***/

function renderProductDetails(){
  document.querySelector('#productName').innerText = product.Brand.Name;//why Brand does not need index number? B/c it is an Object
  document.querySelector('#productNameWithoutBrand').innerText = product.NameWithoutBrand;
  document.querySelector('#productImage').src = product.Image;//img is not working if use innerText
  document.querySelector('#productFinalPrice').innerText = `$${product.FinalPrice}`;
  document.querySelector('#productColorName').innerText = product.Colors[0].ColorName;// colorName is not working without index number. B/c it is an array
  document.querySelector('#productDescriptionHtmlSimple').innerHTML = product.DescriptionHtmlSimple; //why use innerHTML instead of innerText. (weird icons appreared with innerText)
}