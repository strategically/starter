import {Link} from "gatsby";
import React from "react";

const ExpertiseBlock = () => (
    <div className="row justify-content-center my-5">
        <div id="cta" className="h-50 py-2 my-5 align-items-center my-5">
            <h1>NEED OUR EXPERTISE?</h1>
            <Link to={'/contact'} className="btn btn-primary">Schedule a strategy call</Link>
        </div>
    </div>
)

export default ExpertiseBlock
