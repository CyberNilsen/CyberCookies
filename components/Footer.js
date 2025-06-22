

import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {}
        <div className={styles.footerContent}>
          
          {}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>
              <span className={styles.logoIcon}>🍪</span>
              Cybercookies
            </h3>
            <p className={styles.footerDescription}>
              Your ultimate destination for everything related to cookies. 
              From recipes to history, we've got it all covered!
            </p>
          </div>

          {}
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>Home</Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>About Cookies</Link>
              </li>
              <li>
                <Link href="/recipes" className={styles.footerLink}>Recipes</Link>
              </li>
              <li>
                <Link href="/history" className={styles.footerLink}>History</Link>
              </li>
            </ul>
          </div>

          {}
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#" className={styles.footerLink}>Baking Tips</a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>Cookie Tools</a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>FAQ</a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>Contact Us</a>
              </li>
            </ul>
          </div>

          {}
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                📘
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                🐦
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                📷
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                📺
              </a>
            </div>
          </div>
        </div>

        {}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomContent}>
            <p className={styles.copyright}>
              © 2024 Cybercookies. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <a href="#" className={styles.legalLink}>Privacy Policy</a>
              <a href="#" className={styles.legalLink}>Terms of Service</a>
              <a href="#" className={styles.legalLink}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}