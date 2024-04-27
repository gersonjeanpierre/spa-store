import ModalProduct from "./components/ModalProduct";
import { NotFound } from "./pages/404";

class Router {
  constructor(routes) { // Recibimos array de objetos con las rutas
    this.routes = routes;
  }

  init() {
    this.listenForChanges();
    this.navigateInitialPage();
  }

  listenForChanges() {

    window.addEventListener('popstate', () => {
      this.route(window.location.pathname);
    });

    window.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(`Test: ${window.location.pathname}?id=${this.productId}`)
      // window.history.pushState(null, '', `${window.location.pathname}?id=${this.productId}`);
      // this.route(window.location.pathname);

      if (e.target.tagName === 'A') {
        window.history.pushState(null, '', e.target.href);
        this.route(e.target.pathname);
      }
    });
  }

  navigateInitialPage() {
    this.route(window.location.pathname);
  }

  route(path) {
    const container = document.getElementById('container');


    const query = location.search;
    const params = new URLSearchParams(query);
    const id = params.get('id');

    console.log("Este es el params", params)
    console.log("Este es el id", id)
    console.log("location", window.location.pathname)


    const matchedRoute = this.routes.find(route => route.path === path);

    console.log("Este es el matchedRoute", matchedRoute.component)

    if (matchedRoute) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      if (id) {
        container.insertAdjacentHTML('beforeend', matchedRoute.component(id)); // No funciono con appendChild
        return;
      }
      container.appendChild(matchedRoute.component());

    } else {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(NotFound());
    }
  }
}

export default Router;
