import './styles.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img
            src="assets/logo.svg"
            alt="Uphold Logo"
            className="navbar-logo-img"
          />
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li>
              <a href="#">Consumers</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li>
              <a href="#">FAQ & Support</a>
            </li>
            <li>
              <a href="#">Platform Status</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <div className="footer-section-stores-container">
            <img src="assets/appstore.svg" alt="" />
            <img src="assets/playstore.svg" alt="" />
          </div>
          <div className="footer-section-language-container">
            <select name="language" id="language">
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-text">
            Uphold Europe Limited Reg No. 09281410, Registered Office:
            Interchange Triangle, Chalk Farm Road, London, England, NW1 8EH
          </p>
          <p className="footer-text">
            &copy; Uphold Inc. 2023. All Rights Reserved.{' '}
            <a href="#">Agreements</a> <a href="#">Privacy & Data Policy</a>{' '}
            <a href="#">Cookie Policy</a>
          </p>
        </div>
        <div>
          <img src="assets/qr-code.svg" alt="" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
