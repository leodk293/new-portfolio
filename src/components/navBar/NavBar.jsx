import React, { useState } from 'react';
import './styles.css';

export default function NavBar() {
    const [linksVisible, setLinksVisible] = useState(false);

    return (
        <div className='nav-bar'>
            <div className="row">
                <h1>LOGO</h1>
                <button onClick={() => setLinksVisible(!linksVisible)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                        stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-square-menu">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 8h10" />
                        <path d="M7 12h10" />
                        <path d="M7 16h10" />
                    </svg>
                </button>
            </div>

            <nav className={linksVisible === false ? 'show-links' : ''}>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </div>
    );
}
