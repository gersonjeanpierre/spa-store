import { firstLetterToUpperCase } from "../helpers/functionsStore";
import ModalProduct from "./ModalProduct";
import Product from "./Product";

class CardProduct extends HTMLElement {
  static name = 'card-product';

  constructor(product, shoppingCart) {
    super();
    this.product = product;
    this.shoppingCart = shoppingCart;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    // const brand = this.product.brand;

    shadow.innerHTML = /*html*/ `
      <style>${this.style()}</style>
      <div class="product-card">
        <div class="image">  
          <img src="${this.product.images[0]}" alt="${this.product.title}">
        </div>
        <div class="title">
          <h3>${firstLetterToUpperCase(this.product.title)}</h3>
          <span class="brand">${this.product.brand}</span>
          <span class="price">$${this.product.price.toFixed(2)}</span>
        </div>
        <button>Agregar al carrito</button>
      </div>
    `;
    const openModal = shadow.querySelector('.image');
    openModal.addEventListener('click', () => this.openModal());
    // const button = shadow.querySelector('button');
    // button.addEventListener('click', () => this.addToCart());
  }

  openModal() {
    const item = new Product(this.product, this.shoppingCart);
    item.id = `product-${this.product.id}`;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(item);

    // Actualizar la URL sin recargar la página
    history.pushState(null, '', `store/product?id=${this.product.id}`);




  }

  style() {
    return /*css*/ `

      .product-card {
        justify-content: center;    
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: 300px;
        max-height: 400px;
      }

      .image {
        height: 300px;
        overflow: hidden;
        display: flex;
        justify-content: center;  
        border-radius: 5px 5px 0 0;
      }

      .product-card img {
        width: auto;
        height: 100%;
        object-fit: cover;
      }

      .title{
        height: 100px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 10px;
      }
      .product-card h3 {
        margin: 0;
        color: #333;
        font-size: 18px;
      }
      .brand{
        color: #333;
        font-size: 12px;
      }
      .price {
        margin-top: 10px;
        font-weight: bold;
        color: #333;
      }

      .product-card button {
        display: block;
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
      }

      .product-card button:hover {
        background-color: #0056b3;
      }`
  }


  // addToCart() {
  //   this.shoppingCart.addProduct(this.product);
  // }
}

export default CardProduct;
