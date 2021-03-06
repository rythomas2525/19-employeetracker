import React from "react";
import { Link } from "react-router-dom";
import "./style.css"



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Employee Tracker
      </Link>
            <div >
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "nav-link"

                            }
                        >
                            Home
                            </Link>
                    </li>



                </ul>

            </div>
        </nav >
    );
};

export default Navbar;