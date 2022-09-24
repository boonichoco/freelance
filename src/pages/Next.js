import React from 'react';
import Content from '../components/Content';
import BoxTitle from '../components/BoxTitle';
import { motion } from "framer-motion";
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const titlecontent = {
    title: 'notre concept',
    content: [<div className="ContainerP">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat
        </p>
        <p>
            Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse habitant tellus malesuada odio. Nulla adipiscing feugiat nec enim tincidunt lectus nec, consequat.
        </p>
    </div>],
};

const Next = () => {
    return (

        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.3 }}>
            <div className="content">
                <Logo />
                <BoxTitle title={titlecontent.title} content={titlecontent.content} />
                <Navigation />
            </div>
        </motion.div>
    );
};

export default Next;