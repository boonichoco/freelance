import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="container">
        <nav>
            <ul className="NavList">
                <NavLink to="/">
                <li className="NavItem">
                        contact
                    </li>
                </NavLink >
                <NavLink to="/">
                    <li className="NavItem">
                        travaux
                    </li>
                    <span className="toto"></span>
                </NavLink>
                <NavLink to="/">
                    <li className="NavItem">
                        concept
                    </li>
                </NavLink>
                <NavLink to="/">
                    <li className="NavItem">
                        compétences
                    </li>
                </NavLink>
            </ul>
        </nav>
    </div>
    );
};

export default Navigation;