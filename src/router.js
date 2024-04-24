import { NotFound } from "./pages/404";

class Router {
  constructor(routes) { // Recibimos array de objetos con las rutas
    this.routes = routes;
    this.root = '/';
  }

  init() {
    this.listenForChanges();
    this.navigateInitialPage();
  }

  listenForChanges() {
    window.addEventListener('popstate', () => {
      this.route(window.location.pathname);
    });
  }

  navigateInitialPage() {
    this.route(window.location.pathname);
  }

  route(path) {
    const matchedRoute = this.routes.find(route => route.path === path);
    if (matchedRoute) {
      app.appendChild(matchedRoute.component());
    } else {
      app.appendChild(NotFound());
    }
  }
}

export default Router;
