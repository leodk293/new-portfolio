import React from 'react';
import './styles.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Description() {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const animationProps1 = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'scale(1)' : 'scale(0)',
        config: { duration: 600 },
    });

    const animationProps2 = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'scale(1)' : 'scale(0)',
        config: { duration: 700 },
    });

    const animationProps3 = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'scale(1)' : 'scale(0)',
        config: { duration: 800 },
    });

    const animationProps4 = useSpring({
        opacity: inView4 ? 1 : 0,
        transform: inView4 ? 'scale(1)' : 'scale(0)',
        config: { duration: 900 },
    });

    return (
        <section className='des-container'>
            <animated.div ref={ref1} style={animationProps1} className="pattern">
                <h1>100+</h1>
                <p>Projects</p>
            </animated.div>
            <animated.div ref={ref2} style={animationProps2} className="pattern">
                <h1>~100</h1>
                <p>Users</p>
            </animated.div>
            <animated.div ref={ref3} style={animationProps3} className="pattern">
                <h1>5</h1>
                <p>Years</p>
            </animated.div>
            <animated.div ref={ref4} style={animationProps4} className="pattern">
                <h1>7</h1>
                <p>Awards</p>
            </animated.div>
        </section>
    );
}
