import React from 'react';
import Navigation from '../components/Navigation';
import { gsap } from "gsap";
import { useRef } from "react";
import {useEffect, useState} from 'react';



const Home = () => {
    const el = useRef();
    const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.from(q(".HeadTitle",".SubTitle"), {
        y: -500 
    });
    gsap.to(q(".HeadTitle",".SubTitle"), {
        y: 0,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.4
    });
  });
    return (
        <div className='content'>
            <div className="container" ref={el}>
                <h1 className="HeadTitle">
                    Dev-it
                </h1>
                <h1 className="HeadTitle SubTitle">
                    Freelance
                </h1>
                <h1 className="HeadTitle SubTitle">
                    à portée de clic !
                </h1>
            </div>
            <Navigation>
                
            </Navigation>
        </div>
    );
};

export default Home;