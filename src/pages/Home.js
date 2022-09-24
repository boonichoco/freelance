import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { motion } from "framer-motion";


const Home = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            className='content'>
            <Logo />
            <div className="container" >
                <motion.h1
                    animate={{ y: 0 }}
                    initial={{ y: -500 }}
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.5 }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    className="Title WhiteTitle">
                    Dev-it
                </motion.h1>
                <motion.h1
                    animate={{ y: 0 }}
                    initial={{ y: -1000 }}
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.5, delay: 0.3 }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    className="Title GreenTitle">
                    Freelance
                </motion.h1>
                <motion.h1
                    animate={{ y: 0 }}
                    initial={{ y: -1200 }}
                    transition={{ type: 'spring', duration: 0.6, bounce: 0.5, delay: 0.6 }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.2}
                    className="Title GreenTitle">
                    à portée de clic !
                </motion.h1>
            </div>
            <Navigation />
        </motion.div>
    );
};

export default Home;