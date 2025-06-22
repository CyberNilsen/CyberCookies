
import Link from 'next/link' 
import { useState } from 'react' 
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        
        {}
        <Link href="/" className={styles.navLogo}>
          <span className={styles.logoIcon}>🍪</span>
          Cybercookies
        </Link>

        {}
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

        {}
        <Link href="/login" className={styles.loginButton}>
          Login
        </Link>

        {}
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

      {}
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