import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    };

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    return (
        <nav className={styles.navBar}>
        <Link to="/" className={styles.logo}>BlogApp</Link>
        <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/">New Post</Link>
        </div>
        <button
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
        >
            {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
            <Link to="/" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/blog" onClick={toggleMobileMenu}>Blog</Link>
            <Link to="/about" onClick={toggleMobileMenu}>About</Link>
            </div>
        )}
        </nav>
    );
};

export default NavBar;