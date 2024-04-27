import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import App from './src/app.js'
import Router from './src/router.js'
import routes from './src/routes.js'
import getProducts from './src/api/getProduct.js'
import CardProduct from './src/components/CardProduct.js'
import Product from './src/components/Product.js'


await getProducts();


// Custom Elements
window.customElements.define(Product.name, Product)
window.customElements.define(CardProduct.name, CardProduct)

// Render App
document.addEventListener('DOMContentLoaded', App());

// Router
const router = new Router(routes);
router.init();
