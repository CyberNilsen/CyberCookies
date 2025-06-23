import Link from 'next/link' 
import { useState } from 'react' 
import { useRouter } from 'next/router'
import { useAuth } from '../contexts/AuthContext'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const { user, logout } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
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
          <Link 
            href="/" 
            className={`${styles.navLink} ${router.pathname === '/' ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`${styles.navLink} ${router.pathname === '/about' ? styles.active : ''}`}
          >
            About Cookies
          </Link>
          <Link 
            href="/recipes" 
            className={`${styles.navLink} ${router.pathname === '/recipes' ? styles.active : ''}`}
          >
            Recipes
          </Link>
          <Link 
            href="/history" 
            className={`${styles.navLink} ${router.pathname === '/history' ? styles.active : ''}`}
          >
            History
          </Link>
          
          {}
          {user && (
            <Link 
              href="/dashboard" 
              className={`${styles.navLink} ${router.pathname === '/dashboard' ? styles.active : ''}`}
            >
              Dashboard
            </Link>
          )}
        </div>

        {}
        <div className={styles.authSection}>
          {user ? (
            <div className={styles.userMenu}>
              <span className={styles.userGreeting}>
                Hey, {user.name}! 👋
              </span>
              <button 
                onClick={handleLogout}
                className={styles.logoutButton}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className={styles.loginButton}>
              Login
            </Link>
          )}
        </div>

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
          <Link 
            href="/" 
            className={`${styles.mobileNavLink} ${router.pathname === '/' ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`${styles.mobileNavLink} ${router.pathname === '/about' ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            About Cookies
          </Link>
          <Link 
            href="/recipes" 
            className={`${styles.mobileNavLink} ${router.pathname === '/recipes' ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            Recipes
          </Link>
          <Link 
            href="/history" 
            className={`${styles.mobileNavLink} ${router.pathname === '/history' ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            History
          </Link>
          
          {}
          {user && (
            <Link 
              href="/dashboard" 
              className={`${styles.mobileNavLink} ${router.pathname === '/dashboard' ? styles.active : ''}`} 
              onClick={closeMenu}
            >
              Dashboard
            </Link>
          )}

          {}
          {user ? (
            <div className={styles.mobileAuthSection}>
              <span className={styles.mobileUserGreeting}>
                Hey, {user.name}! 👋
              </span>
              <button 
                onClick={handleLogout}
                className={styles.mobileLogoutButton}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              href="/login" 
              className={styles.mobileNavLink} 
              onClick={closeMenu}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}