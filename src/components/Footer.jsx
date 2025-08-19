function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <ul className="footer-col footer-about">
            <li className="footer-logo">
              <span>Sadguru Balumama</span> Self Drive Cars
            </li>
            <li className="footer-desc">
              We offer a wide range of vehicles for all your driving needs. Find
              the perfect ride at unbeatable prices.
            </li>
            <li className="footer-contact">
              <a href="tel:+917218584951">
                <i className="fa-solid fa-phone"></i> (+91) 7218584951
              </a>
              <a href="tel:+917447411341">
                <i className="fa-solid fa-phone"></i> (+91) 7447411341
              </a>
            </li>
            <li>
              <a href="mailto:anil.kokare951@gmail.com">
                <i className="fa-solid fa-envelope"></i> anil.kokare951@gmail.com
              </a>
            </li>
            <li className="footer-managed">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://alphaspice.netlify.app/"
              >
                © Managed by <b>AlphaSpice</b>
              </a>
            </li>
          </ul>

          {/* Company Links */}
          <ul className="footer-col">
            <li className="footer-title">Company</li>
            <li>
              <a href="#careers"><i className="fa-solid fa-briefcase"></i> Careers</a>
            </li>
            <li>
              <a href="#mobile"><i className="fa-solid fa-mobile-screen"></i> Mobile</a>
            </li>
            <li>
              <a href="#blog"><i className="fa-solid fa-pen-nib"></i> Blog</a>
            </li>
            <li>
              <a href="#work"><i className="fa-solid fa-gears"></i> How We Work</a>
            </li>
          </ul>
          {/* Working Hours */}
          <ul className="footer-col">
            <li className="footer-title">Working Hours</li>
            <li className="working-hours">Open <span>24/7</span></li>
          </ul>

          {/* Newsletter */}
          <ul className="footer-col">
            <li className="footer-title">Stay Connected</li>
            <li>
              <p>Subscribe for updates and offers.</p>
            </li>
            <li>
              <div className="subscribe-box">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                />
                <button className="footer-btn">Subscribe</button>
              </div>
            </li>
            <li className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://wa.me/9579985971" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
