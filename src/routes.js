
import Home from "./pages/Home.js";
import ProductItem from "./pages/Product.js";
import Store from "./pages/Store.js";


const routes = [
  { path: '/spa-store/', component: Home },
  { path: '/spa-store/store', component: Store },
  { path: '/spa-store/store/product', component: ProductItem },
];

export default routes;
