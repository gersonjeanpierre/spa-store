
import Home from "./pages/Home.js";
import ProductItem from "./pages/Product.js";
import Store from "./pages/Store.js";


const routes = [
  { path: '/', component: Home },
  { path: '/store', component: Store },
  { path: '/store/product', component: ProductItem },
];

export default routes;
