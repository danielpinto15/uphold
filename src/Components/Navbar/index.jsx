import './styles.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="navbar-links">
          <a href="#" className="navbar-link">
            Personal
          </a>
          <a href="#" className="navbar-link">
            Business
          </a>
          <a href="#" className="navbar-link">
            Partners
          </a>
        </div>
        <a href="#" className="navbar-logo">
          <img
            src="assets/logo.svg"
            alt="Uphold Logo"
            className="navbar-logo-img"
          />
        </a>
        <div className="navbar-button">
          <button className="login-button">Log In</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
