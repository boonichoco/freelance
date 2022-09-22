import React from 'react';
import Navigation from '../components/Navigation';
import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect, useState } from 'react';



const Home = () => {
    const el = useRef();
    const loader = useRef();
    const maskloader = useRef();
    const q = gsap.utils.selector(el);

    useEffect(() => {
        gsap.from(q(".HeadTitle", ".SubTitle"), {
            y: -500,
            opacity: 0
        });
        gsap.to(q(".HeadTitle", ".SubTitle"), {
            y: 0,
            delay: 2.8,
            opacity: 1,
            ease: "elastic.out(1, 0.2)",
            stagger: 0.6
        });
    });

    useEffect(() => {
        gsap.from('.MaskLoader', {
            scaleX: 0,
            scaleY: 0.02
        });
        gsap.to('.MaskLoader', {
            scaleX: 1,
            delay: 1,
            duration: 1,
            ease: "bounce.out"
        });
        gsap.from('.MaskLoader', {
            scaleY: 0.02,
            display: "flex",
        });
        gsap.to('.MaskLoader', {
            scaleY: 1,
            delay: 1.9,
            duration: 1,
            display: "none",
            ease: "bounce.out"
        });
        gsap.from('.Loader', {
            display: "flex",
        });
        gsap.to('.Loader', {
            display: "none",
            delay: 1.8
        });
    });
    return (

        <div className='content'>
            <div className="Loader" ref={loader}>
                <div className="MaskLoader" ref={maskloader}></div>
            </div>
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