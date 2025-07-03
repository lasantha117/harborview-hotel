import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Rooms & Rates', path: '/rooms' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={classNames('header', isScrolled && 'scrolled')}>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="logo">
                        <Link to="/" onClick={closeMenu}>
                            <h2>The Harborview Hotel</h2>
                        </Link>
                    </div>
                    <nav className="nav">
                        <ul className={classNames('nav-menu', isMenuOpen && 'active')}>
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className="nav-link"
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className={classNames('hamburger', isMenuOpen && 'active')}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
