import { Link } from "gatsby"
import React from "react"


const LinkStyle = {
    color: `#FC961E`,
    textDecoration: `none`,
};

const Brand = ({ brandName }) => (
    <div> 
        <Link to="/" style={ LinkStyle } >
            {/* { brandName } */}
            {"Strategically"}
        </Link>
    </div>
)

export default Brand