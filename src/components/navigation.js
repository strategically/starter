import { Link } from "gatsby"
import React from "react"

import phoneicon from "../images/phoneicon.png";

const LinkStyle = {
    color: `#FC961E`,
    textDecoration: `none`,
};

const Navigation = () => (
    <div>
        <Link to="/contact" style={ LinkStyle }>
            <img src={phoneicon} alt="phone-icon" height="45" width="45"/>
        </Link>

        {/* <Link to="/" style={{textDecoration: `none`, color: `white`, marginLeft: `16px`}} >
            Contact
        </Link> */}
    </div>
)

export default Navigation