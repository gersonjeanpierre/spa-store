const Header = () => {

  const header = document.createElement('header')
  header.innerHTML = /*html*/`
    <h1>Jaluk Store</h1>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/store">Store</a>
        </li>
      </ul>
    </nav>
  `

  return header
}

export default Header