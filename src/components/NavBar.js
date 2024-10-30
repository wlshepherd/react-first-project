import React from 'react';
import '../styles/Navigation.css';

const NavBar = () => {
    const currentPath = window.location.pathname;
    console.log('Current Path:', currentPath);

    return (
        <div className="topnav" id="myTopnav">
            <div className="title">William Shepherd Photography (攝影)</div>
            <div className="nav-links">
                <a href="/" className={`nav-link ${currentPath === '/' ? 'active-link' : ''}`}>Portfolio</a>
                <a href="/about" className={`nav-link ${currentPath === '/about' ? 'active-link' : ''}`}>About</a>
                <a href="/contact" className={`nav-link ${currentPath === '/contact' ? 'active-link' : ''}`}>Contact</a>
            </div>
        </div>
    );
};

export default NavBar;