import Product from "../components/Product"



const ProductItem = (idProduct) => {



  const item = new Product(window.products.find(product => product.id == idProduct));
  item.id = `product-${idProduct}`;

  //borrar el contenedor
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  container.appendChild(item);


}

export default ProductItem