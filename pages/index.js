// pages/index.js
// This is the main home page component
// In Next.js, files in the 'pages' folder automatically become routes
// So this file creates the route at '/' (homepage)

import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // Layout component wraps all pages with navbar and footer
    <Layout>
      {/* Hero Section - the main banner at the top */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to the World of <span className={styles.accent}>Cookies</span>
          </h1>
          <p className={styles.heroDescription}>
            Discover the delicious history, varieties, and secrets of cookies from around the world
          </p>
          <button className={styles.ctaButton}>
            Start Your Cookie Journey
          </button>
        </div>
        <div className={styles.heroImage}>
          {/* Using emoji as placeholder for cookie image */}
          <div className={styles.cookieEmoji}>🍪</div>
        </div>
      </section>

      {/* Features Section - showcasing different aspects of cookies */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why We Love Cookies</h2>
          <div className={styles.featuresGrid}>
            
            {/* Feature Card 1 */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏠</div>
              <h3>Homemade Goodness</h3>
              <p>Nothing beats the smell and taste of freshly baked cookies from your own kitchen</p>
            </div>

            {/* Feature Card 2 */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌍</div>
              <h3>Global Varieties</h3>
              <p>Explore cookie traditions from different cultures and countries around the world</p>
            </div>

            {/* Feature Card 3 */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👨‍🍳</div>
              <h3>Expert Recipes</h3>
              <p>Learn from professional bakers and time-tested family recipes</p>
            </div>

            {/* Feature Card 4 */}
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎉</div>
              <h3>Perfect for Sharing</h3>
              <p>Cookies bring people together and create lasting memories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cookies Section */}
      <section className={styles.popularCookies}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Popular Cookie Types</h2>
          <div className={styles.cookieGrid}>
            
            {/* Cookie Type 1 */}
            <div className={styles.cookieCard}>
              <div className={styles.cookieCardIcon}>🍫</div>
              <h3>Chocolate Chip</h3>
              <p>The classic American cookie that started it all</p>
            </div>

            {/* Cookie Type 2 */}
            <div className={styles.cookieCard}>
              <div className={styles.cookieCardIcon}>🥜</div>
              <h3>Oatmeal Raisin</h3>
              <p>A wholesome treat packed with fiber and sweetness</p>
            </div>

            {/* Cookie Type 3 */}
            <div className={styles.cookieCard}>
              <div className={styles.cookieCardIcon}>🍪</div>
              <h3>Sugar Cookies</h3>
              <p>Simple, sweet, and perfect for decorating</p>
            </div>

            {/* Cookie Type 4 */}
            <div className={styles.cookieCard}>
              <div className={styles.cookieCardIcon}>🍯</div>
              <h3>Gingerbread</h3>
              <p>Spiced cookies perfect for the holiday season</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}