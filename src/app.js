import Footer from "./components/Footer.js";
import Header from "./components/Header.js"

let firstRender = true;

const App = () => {
  const app = document.getElementById('app');
  let container;
  if (firstRender) {
    container = document.createElement('div');
    container.id = 'container';
    app.appendChild(Header());
    app.appendChild(container);
    app.appendChild(Footer());
    firstRender = false;
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

export default App