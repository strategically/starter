// This is Footer component

import { Link } from "gatsby"
import React from "react"

const LinkStyle = {
  color: `white`,
  textDecoration: `none`,
  fontWeight: 400,
};

const Footer = () => (
  <footer className="common-width-style"> 
    <div 
      style={{ 
        paddingTop: `18px`, 
        // fontFamily: `open sans condensed`, 
        fontSize: `12px`,
      }}
    > 
      <div style={{ display: `inline-block`, }}>
        <Link to="/" style={LinkStyle}>
          © {new Date().getFullYear()} {` `} Strategically Digital Marketing ltd
        </Link>
      </div>
      <div style={{ display: `inline-block`, float: `right`, color: `white`,}}>
        <Link to="/" style={LinkStyle}>
          Privacy
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
