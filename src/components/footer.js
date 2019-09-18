// This is Footer component

import { Link } from "gatsby"
import React from "react"
import "../styles/footer.css"

const LinkStyle = {
  color: `white`,
  textDecoration: `none`,
  fontWeight: 400,
};

const Footer = () => (
  <footer className="common-width-style"> 
    <div id="footer-content"> 
      <div style={{ display: `inline-block`, float: `left`, color: `white`,}}>
        <li className="nav-item mx-2">© {new Date().getFullYear()}, {` `} <a href="https://strategically.co/">Strategically</a></li>
      </div>
      <div style={{ display: `inline-block`, float: `right`, color: `white`,}}>
        <a href="https://bitbucket.org/strategically/gatsby/src/master/" style={LinkStyle}>
          Bitbucket
        </Link>
        {' | '}
        <Link to="/" style={LinkStyle}>
          Terms
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
