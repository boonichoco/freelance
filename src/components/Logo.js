import React from 'react';
import { motion } from "framer-motion";

const Logo = () => {
    return (
        <div className='container Logo'>
            <motion.div animate={{ scaleY: [1,0.5,1]}} transition={{ repeat: Infinity, duration: 1, delay: 0.1}} className="Part Part1"></motion.div>
            <motion.div animate={{ scaleY: [1,0.6,1]}} transition={{ repeat: Infinity, duration: 1, delay: 0.2}} className="Part Part2"></motion.div>
            <motion.div animate={{ scaleY: [1,0.8,1]}} transition={{ repeat: Infinity, duration: 1, delay: 0.3}} className="Part"></motion.div>
            <motion.div animate={{ scaleY: [1,0.6,1]}} transition={{ repeat: Infinity, duration: 1, delay: 0.2}} className="Part Part2"></motion.div>
            <motion.div animate={{ scaleY: [1,0.5,1]}} transition={{ repeat: Infinity, duration: 1, delay: 0.1}} className="Part Part1"></motion.div>
        </div>
    );
};

export default Logo;