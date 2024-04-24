import Header from "./components/Header.js"

const App = () => {
  const app = document.getElementById('app')

  app.appendChild(Header())
}

export default App