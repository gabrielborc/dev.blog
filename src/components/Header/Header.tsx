import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <a href="/">
            <h1 className="logo">
              <span>Dev</span> Chiarelo
            </h1>
          </a>
          <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
          <label htmlFor="menu-toggle" className="menu-toggle-label">
            ☰
          </label>
          <ul className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Sobre</a>
            </li>
          </ul>
        </nav>
      </div>
    </header >
  );
}