// import { Link } from "gatsby"
import React from "react"
import "../styles/navigation.css";
import phoneicon from "../images/phoneicon.png";

const LinkStyle = {
    color: `#FC961E`,
    textDecoration: `none`,
};

const Navigation = () => (
    <div>
        <a href="tel:+447882090659" style={ LinkStyle }>
            <img src={ phoneicon } alt="phone-icon"/>
        </a>

        {/* <Link to="/" style={{textDecoration: `none`, color: `white`, marginLeft: `16px`}} >
            Contact
        </Link> */}
    </div>
)

export default Navigation