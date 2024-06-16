import React from 'react';
import './styles.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <footer>
      <div></div>
      <animated.div ref={ref} style={animation}>
        <h2 style={{ color: "#fff" }}>LOGO</h2>
        <p style={{ color: "rgba(156, 156, 156, 0.564)" }}>All rights reserved.</p>
      </animated.div>
    </footer>
  );
}
