import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import App from './src/app.js'
import Router from './src/router.js'
import routes from './src/routes.js'
import { getProducts } from './src/api/getProduct.js'
import CardProduct from './src/components/CardProduct.js'
import { firstLetterToUpperCase } from './src/helpers/functionsStore.js'
import ModalProduct from './src/components/ModalProduct.js'

// Products en el scope global
let products = await getProducts();
window.products = products;



// Custom Elements
window.customElements.define('card-product', CardProduct)
window.customElements.define('modal-product', ModalProduct)

// Render App
document.addEventListener('DOMContentLoaded', App());

// Router
const router = new Router(routes);
router.init();
