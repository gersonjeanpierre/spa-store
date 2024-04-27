const Header = () => {

  const header = document.createElement('header')
  header.innerHTML = /*html*/`
    <h1>Jaluk Store</h1>
    <nav>
      <ul>
        <li>
          <a href="/spa-store/">Home</a>
        </li>
        <li>
          <a href="/spa-store/store">Store</a>
        </li>
      </ul>
    </nav>
  `

  return header
}

export default Header