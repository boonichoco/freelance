import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';



const Home = () => {

    return (
        <div className='content'>
            <Logo />
            <div className="container" >
                <h1 className="Title WhiteTitle">
                    Dev-it
                </h1>
                <h1 className="Title GreenTitle">
                    Freelance
                </h1>
                <h1 className="Title GreenTitle">
                    à portée de clic !
                </h1>
            </div>
            <Navigation />
        </div>
    );
};

export default Home;