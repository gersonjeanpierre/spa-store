import { getProducts } from "../api/getProduct";
import ModalProduct from "../components/ModalProduct";
import CardProduct from "../components/CardProduct";


const products = await getProducts();

const Store = () => {

  const store = document.createElement('section')
  store.id = 'store'

  products.forEach(product => {
    const productCard = new CardProduct(product);
    store.appendChild(productCard);
  });

  return store
}

export default Store