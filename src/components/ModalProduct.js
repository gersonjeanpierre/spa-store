class ModalProduct extends HTMLElement {
  constructor(product, shoppingCart) {
    super();
    this.product = product;
    this.shoppingCart = shoppingCart;
    this.container = document.getElementById('container');
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    if (!this.product) {
      shadow.innerHTML = '';
      return;
    }

    shadow.innerHTML = /*html*/ `
      <div class="product-modal">
        <div class="modal-content">
          <img src="${this.product.image}" alt="${this.product.name}">
          <h2>${this.product.title}</h2>
          <p class="description">${this.product.description}</p>
          <span class="price">$${this.product.price.toFixed(2)}</span>
          <button class="add-to-cart">Agregar al carrito</button>
          <button class="close">Cerrar</button>
        </div>
      </div>
    `;

    const closeButton = shadow.querySelector('.close');
    closeButton.addEventListener('click', () => this.closeModal());

    // const addToCartButton = shadow.querySelector('.add-to-cart');
    // addToCartButton.addEventListener('click', () => {
    //   this.shoppingCart.addProduct(this.product);
    //   this.closeModal();
    // });
  }

  closeModal() {
    this.container.removeChild(this.container.lastChild);
  }
}

export default ModalProduct;
