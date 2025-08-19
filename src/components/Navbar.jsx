import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li><Link onClick={openNav} to="/">Home</Link></li>
            <li><Link onClick={openNav} to="/about">About</Link></li>
            <li><Link onClick={openNav} to="/models">Models</Link></li>
            <li><Link onClick={openNav} to="/testimonials">Testimonials</Link></li>
            <li><Link onClick={openNav} to="/team">Our Team</Link></li>
            <li><Link onClick={openNav} to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* desktop */}
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600 150"
                width="250"
                height="80"
                style={{ display: "block" }}
              >
                {/* Car Outline */}
                <path
                  d="M80 80 C160 20, 440 20, 520 80"
                  stroke="#e67e22"
                  strokeWidth="6"
                  fill="transparent"
                  strokeLinecap="round"
                />
                {/* Wheels */}
                <circle cx="160" cy="100" r="14" fill="#2c3e50" />
                <circle cx="440" cy="100" r="14" fill="#2c3e50" />

                {/* Company Name inside the car */}
                <text
                  x="300"
                  y="80"
                  fontFamily="Poppins, sans-serif"
                  fontSize="24"
                  fontWeight="bold"
                  fill="#2c3e50"
                  textAnchor="middle"
                >
                  Sadguru Balumama
                </text>

                {/* Tagline just below */}
                <text
                  x="300"
                  y="115"
                  fontFamily="Poppins, sans-serif"
                  fontSize="24"
                  fontWeight="500"
                  fill="#e67e22"
                  textAnchor="middle"
                >
                  Car Rental
                </text>
              </svg>
            </Link>
          </div>

          <ul className="navbar__links">
            <li><Link className="home-link" to="/">Home</Link></li>
            <li><Link className="about-link" to="/about">About</Link></li>
            <li><Link className="models-link" to="/models">Vehicle Models</Link></li>
            <li><Link className="testi-link" to="/testimonials">Testimonials</Link></li>
            <li><Link className="team-link" to="/team">Our Team</Link></li>
            <li><Link className="contact-link" to="/contact">Contact</Link></li>
          </ul>

          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">Sign In</Link>
            <Link className="navbar__buttons__register" to="/">Register</Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
