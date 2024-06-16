import { useState } from 'react';
import React from 'react';
import './styles.css';
import { nanoid } from 'nanoid';
import aboutHero from '../../../public/images/about-image.png';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [experienceIndex, setExperienceIndex] = useState(0);
    const skills = [
        <div key={nanoid(8)}>
            <ul className='skills-list'>
                <li>Node js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>,
        <div key={nanoid(8)}>
            <ul className='skills-list'>
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        </div>,
        <div key={nanoid(8)}>
            <ul className='skills-list'>
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        </div>
    ];

    const [refImg, inViewImg] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refText, inViewText] = useInView({ triggerOnce: true, threshold: 0.1 });

    const imgAnimation = useSpring({
        opacity: inViewImg ? 1 : 0,
        transform: inViewImg ? 'translateX(0)' : 'translateX(-100px)',
        config: { duration: 1000 },
    });

    const textAnimation = useSpring({
        opacity: inViewText ? 1 : 0,
        transform: inViewText ? 'translateX(0)' : 'translateX(100px)',
        config: { duration: 1000 },
    });

    return (
        <section id='about' className='about-container'>
            <animated.img ref={refImg} style={imgAnimation} src={aboutHero} alt="" />

            <animated.div ref={refText} style={textAnimation} className="about-text">
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h1 style={{ fontSize: "50px", fontWeight: "bolder" }}>About Me</h1>
                    <p>
                        I am a full stack web developer with a passion for creating interactive and responsive web applications.
                        I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS,
                        and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team
                        player and I am excited to work with others to create amazing applications.
                    </p>
                </div>

                <div className="experience">
                    <div className="exp">
                        <div className="ptn">
                            <button onClick={() => setExperienceIndex(0)}>Skills</button>
                            <div className={experienceIndex === 0 ? "blue-line" : ""}></div>
                        </div>
                        <div className="ptn">
                            <button onClick={() => setExperienceIndex(1)}>Education</button>
                            <div className={experienceIndex === 1 ? "blue-line grow-edu" : ""}></div>
                        </div>
                        <div className="ptn">
                            <button onClick={() => setExperienceIndex(2)}>Certifications</button>
                            <div className={experienceIndex === 2 ? "blue-line grow-certif" : ""}></div>
                        </div>
                    </div>
                    {skills[experienceIndex]}
                </div>
            </animated.div>
        </section>
    );
}
