import PropTypes from "prop-types"
import React from "react"

import Navigation from "./navigation"
import Brand from "./brand";

const Header = ({ siteTitle }) => (
    <header>
        <div style={{ height: `70px`,}} >
            <div 
                style={{ 
                display: `inline-block`, 
                fontSize: `40px`, 
                fontWeight: `bold`,
                paddingTop: `20px`,
                }}
            >
                <Brand brandName={ siteTitle } />
            </div>
            <div 
                style={{ 
                display: `inline-block`, 
                float: `right`, 
                fontSize: `20px`, 
                paddingTop: `24px`,
                }}
            >
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
