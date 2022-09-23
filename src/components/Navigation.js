import React from 'react';
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
    const[contact, setContact] = React.useState(false);
    return (
        <div className="container">
            <nav>
                <ul className="NavList">
                    <NavLink to="/test">
                        <motion.li whileHover={{ y: -10 }} className="NavItem">
                            contact
                        </motion.li>
                    </NavLink >
                    <NavLink to="/">
                        <motion.li whileHover={{ y: -10 }} className="NavItem">
                            travaux
                        </motion.li>
                        <span className="toto"></span>
                    </NavLink>
                    <NavLink to="/">
                        <motion.li whileHover={{ y: -10 }} className="NavItem">
                            concept
                        </motion.li>
                    </NavLink>
                    <NavLink to="/">
                        <motion.li whileHover={{ y: -10 }} className="NavItem">
                            compétences
                        </motion.li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;