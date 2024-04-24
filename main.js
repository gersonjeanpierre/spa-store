import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import App from './src/app.js'
import Router from './src/router.js'
import routes from './src/routes.js'


document.addEventListener('DOMContentLoaded', App())
// main.js


const router = new Router(routes);
router.init();
