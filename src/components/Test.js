import React from 'react';
import { motion } from 'framer-motion';

const Test = () => {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div style={{ ...styles.page, ...styles.page1 }}>
                <p style={styles.copy}>This is page 1</p>
                <Link style={{ ...styles.copy, ...styles.link }} to="/page2">
                    Go to Page 2
                </Link>
            </div>
        </motion.div>
    );
};

export default Test;