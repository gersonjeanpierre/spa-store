import { firstLetterToUpperCase } from "../helpers/functionsStore";

class Product extends HTMLElement {
  static name = 'product-item';

  constructor(product, shoppingCart) {
    super();
    this.product = product;
    this.shoppingCart = shoppingCart;
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const images = this.product.images
      .map(image => `<img src="${image}" alt="${this.product.title}">`)
      .join('');
    this.shadow.innerHTML = /*html*/ `
      <style>${this.style()}</style>
      <div class="product-item">
        <div class="image">  
          ${images}
        </div>
        <div class="title">
          <h3>${firstLetterToUpperCase(this.product.title)}</h3>
          <span class="brand">${this.product.brand}</span>
          <span class="price">$${this.product.price.toFixed(2)}</span>
        </div>
        <button>Agregar al carrito</button>
      </div>
    `;

  }

  style() {
    return /*css*/ `
      product-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 300px;
        max-height: 400px;
      }
    `;
  }
}

export default Product