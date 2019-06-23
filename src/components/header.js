import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"
import Brand from "./brand";
import "../styles/header.css";

const Header = ({ siteTitle }) => (
    <header>
        <div id="header-content" >
            <div id="brand-content">
                <Brand brandName={ siteTitle } />
            </div>
            <div id="navigation-content">
                <Navigation />
            </div>
        </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
