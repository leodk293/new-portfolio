import React from 'react';
import './styles.css';
import HeroImg from '../../../public/images/hero-image.jpg'
import { Typewriter } from 'react-simple-typewriter';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: {
            duration: 1000, // Durée de l'animation en millisecondes
        },
    });

    return (
        <animated.div ref={ref} style={animationProps} className='hero-container'>
            <div className="hero-text">
                <h1>Hello, I am</h1>
                <h1>
                    <Typewriter
                        words={['Mobile developer', 'Web developer', 'UI/UX designer']}
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.</p>
                <div className="btns">
                    <button>Hire me</button>
                    <button>Download CV</button>
                </div>
            </div>
            <img src={HeroImg} alt="HERO" />
        </animated.div>
    );
}
