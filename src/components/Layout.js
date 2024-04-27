import Header from "./Header";
import Footer from "./Footer";

class Layout extends HTMLElement {
  static name = 'app-layout';

  constructor(children) {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const Header = Header();
    const Footer = Footer();

    this.shadow.innerHTML = /*html*/ `
      <style>${this.style()}</style>
      ${Header}
        <h1>Store</h1>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <p>&copy; 2021 Store</p>
      </footer>
    `;
  }
}