import {Link} from "gatsby";
import React from "react";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg">
        <div className="row align-items-center px-5">
            <div className="container">
                <ul className="navbar-nav ml-auto">
                    <a className="navbar-brand px-5" href="/">
                        <h2>Strategically</h2>
                    </a>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Strategy process</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Development</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Analytics & CRO</a>
                    </li>
                    <li className="nav-item">
                        <Link to={'/contact'} className="btn btn-primary">Schedule a strategy call</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar
