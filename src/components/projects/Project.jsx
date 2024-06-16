import React, { useState } from 'react';
import './styles.css';
import Props from './props/Props';
import { nanoid } from 'nanoid';

import project1 from '../../../public/images/projects/1.png';
import project2 from '../../../public/images/projects/2.png';
import project3 from '../../../public/images/projects/3.png';
import project4 from '../../../public/images/projects/4.png';
import project5 from '../../../public/images/projects/5.png';
import project6 from '../../../public/images/projects/6.png';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Project() {
    const [projectIndex, setProjectIndex] = useState(0);

    const projects = [
        <div key={nanoid(8)} className="creations">
            <Props image={project1} title={"React Portfolio Website"} description={"Project 1 description"} />
            <Props image={project2} title={"Photography Portfolio Website"} description={"Project 2 description"} />
            <Props image={project3} title={"E-commerce Application"} description={"Project 3 description"} />
            <Props image={project4} title={"Food Ordering Application"} description={"Project 4 description"} />
            <Props image={project5} title={"React Firebase Template"} description={"Authentication and CRUD operations"} />
            <Props image={project6} title={"Full-stack Roadmap"} description={"Project 5 description"} />
        </div>,

        <div key={nanoid(8)} className="creations">
            <Props image={project1} title={"React Portfolio Website"} description={"Project 1 description"} />
            <Props image={project2} title={"Photography Portfolio Website"} description={"Project 2 description"} />
            <Props image={project3} title={"E-commerce Application"} description={"Project 3 description"} />
            <Props image={project5} title={"React Firebase Template"} description={"Authentication and CRUD operations"} />
            <Props image={project6} title={"Full-stack Roadmap"} description={"Project 5 description"} />
        </div>,

        <div key={nanoid(8)} className="creations">
            <Props image={project4} title={"Food Ordering Application"} description={"Project 4 description"} />
        </div>
    ];

    const [refProjects, inViewProjects] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refCategories, inViewCategories] = useInView({ triggerOnce: true, threshold: 0.1 });

    const projectsAnimation = useSpring({
        opacity: inViewProjects ? 1 : 0,
        transform: inViewProjects ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 },
    });

    const categoriesAnimation = useSpring({
        opacity: inViewCategories ? 1 : 0,
        transform: inViewCategories ? 'translateY(0)' : 'translateY(-50px)',
        config: { duration: 1000 },
    });

    return (
        <section id='projects' className='projects-container'>
            <animated.h1 ref={refCategories} style={categoriesAnimation}>My projects</animated.h1>

            <animated.div ref={refCategories} style={categoriesAnimation} className="categories">
                <button className={projectIndex === 0 ? "active" : ""} onClick={() => setProjectIndex(0)}>All</button>
                <button className={projectIndex === 1 ? "active" : ""} onClick={() => setProjectIndex(1)}>Web</button>
                <button className={projectIndex === 2 ? "active" : ""} onClick={() => setProjectIndex(2)}>Mobile</button>
            </animated.div>

            <animated.div ref={refProjects} style={projectsAnimation}>
                {projects[projectIndex]}
            </animated.div>
        </section>
    );
}
