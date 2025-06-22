// components/Navbar.js
// This component creates the navigation bar that appears at the top of every page
// It includes links to different pages and a login button

import Link from 'next/link' // Next.js Link component for client-side navigation
import { useState } from 'react' // React hook for managing component state
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  // State to track if mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        
        {/* Logo/Brand name - links to homepage */}
        <Link href="/" className={styles.navLogo}>
          <span className={styles.logoIcon}>🍪</span>
          Cybercookies
        </Link>

        {/* Desktop Navigation Menu */}
        <div className={styles.navMenu}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About Cookies
          </Link>
          <Link href="/recipes" className={styles.navLink}>
            Recipes
          </Link>
          <Link href="/history" className={styles.navLink}>
            History
          </Link>
        </div>

        {/* Login Button */}
        <Link href="/login" className={styles.loginButton}>
          Login
        </Link>

        {/* Mobile Menu Toggle Button (hamburger menu) */}
        <button 
          className={styles.mobileMenuToggle}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {/* Mobile Navigation Menu - only shows when isMenuOpen is true */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>
            About Cookies
          </Link>
          <Link href="/recipes" className={styles.mobileNavLink} onClick={toggleMenu}>
            Recipes
          </Link>
          <Link href="/history" className={styles.mobileNavLink} onClick={toggleMenu}>
            History
          </Link>
          <Link href="/login" className={styles.mobileNavLink} onClick={toggleMenu}>
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}