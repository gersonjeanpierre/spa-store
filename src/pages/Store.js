
import CardProduct from "../components/CardProduct";

const Store = () => {
  const products = window.products;
  const store = document.createElement('section')
  store.id = 'store'

  products.map(product => {
    const card = new CardProduct(product)
    store.appendChild(card)
  });

  return store
}

export default Store