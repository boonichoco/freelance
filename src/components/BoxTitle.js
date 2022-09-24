import React from 'react';
import { motion } from 'framer-motion';

function Boxtitle(props) {
    return (
        <div className="container">
            <div className="BoxContent">
                <motion.div
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: -1000, opacity: 0 }}
                    transition={{ type: 'spring', duration: 0.8, bounce: 0.5 }}
                    className="BoxTitleContainer">
                    <h1 className="Title GreenTitle PurpleBG">
                        {props.title}
                    </h1>
                </motion.div>
                <div>
                    {props.content}
                </div>
            </div>
        </div>
    );
}






export default Boxtitle;