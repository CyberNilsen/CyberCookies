// pages/about.js
// This creates the about page route at '/about'
// Contains information about cookies in general

import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        
        {/* Page Header */}
        <section className={styles.aboutHeader}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>All About Cookies</h1>
            <p className={styles.pageSubtitle}>
              Discover the fascinating world of cookies, from their humble beginnings to modern varieties
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className={styles.container}>
          
          {/* What are Cookies Section */}
          <section className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🍪</span>
              <h2 className={styles.sectionTitle}>What are Cookies?</h2>
            </div>
            <div className={styles.sectionContent}>
              <p>
                Cookies are small, sweet baked treats that have been delighting people for centuries. 
                They're typically made from flour, sugar, eggs, and butter, though recipes vary widely 
                across different cultures and regions. The beauty of cookies lies in their versatility 
                - they can be soft or crispy, sweet or savory, simple or elaborate.
              </p>
              <p>
                The word "cookie" comes from the Dutch word "koekje," meaning "little cake." 
                Cookies were originally created as test cakes - bakers would use a small amount 
                of cake batter to test oven temperature before baking the full cake.
              </p>
            </div>
          </section>

          {/* Cookie Components Section */}
          <section className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🥄</span>
              <h2 className={styles.sectionTitle}>Cookie Components</h2>
            </div>
            <div className={styles.componentsGrid}>
              
              <div className={styles.componentCard}>
                <div className={styles.componentIcon}>🌾</div>
                <h3>Flour</h3>
                <p>The foundation of most cookies, providing structure and texture</p>
              </div>

              <div className={styles.componentCard}>
                <div className={styles.componentIcon}>🍯</div>
                <h3>Sweeteners</h3>
                <p>Sugar, honey, or maple syrup that give cookies their sweetness</p>
              </div>

              <div className={styles.componentCard}>
                <div className={styles.componentIcon}>🧈</div>
                <h3>Fats</h3>
                <p>Butter or oil that create tenderness and rich flavor</p>
              </div>

              <div className={styles.componentCard}>
                <div className={styles.componentIcon}>🥚</div>
                <h3>Binding Agents</h3>
                <p>Eggs or other ingredients that hold everything together</p>
              </div>

              <div className={styles.componentCard}>
                <div className={styles.componentIcon}>✨</div>
                <h3>Flavorings</h3>
                <p>Vanilla, spices, or extracts that create unique tastes</p>
              </div>

              <div className={styles.componentCard}>
                <div className={styles.componentIcon}>🍫</div>
                <h3>Add-ins</h3>
                <p>Chocolate chips, nuts, or dried fruits for extra flavor</p>
              </div>
            </div>
          </section>

          {/* Cookie Types Section */}
          <section className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🎯</span>
              <h2 className={styles.sectionTitle}>Types of Cookies</h2>
            </div>
            <div className={styles.typesGrid}>
              
              <div className={styles.typeCard}>
                <h3>Drop Cookies</h3>
                <p>
                  Made by dropping spoonfuls of dough onto baking sheets. 
                  Examples include chocolate chip and oatmeal cookies.
                </p>
              </div>

              <div className={styles.typeCard}>
                <h3>Rolled Cookies</h3>
                <p>
                  Dough is rolled flat and cut into shapes with cookie cutters. 
                  Sugar cookies and gingerbread cookies are popular examples.
                </p>
              </div>

              <div className={styles.typeCard}>
                <h3>Pressed Cookies</h3>
                <p>
                  Made using a cookie press or pastry bag to create decorative shapes. 
                  Spritz cookies are a classic example.
                </p>
              </div>

              <div className={styles.typeCard}>
                <h3>Refrigerator Cookies</h3>
                <p>
                  Dough is formed into logs, chilled, then sliced and baked. 
                  Also known as icebox cookies.
                </p>
              </div>

              <div className={styles.typeCard}>
                <h3>Bar Cookies</h3>
                <p>
                  Baked in a pan and cut into squares or rectangles. 
                  Brownies and blondies fall into this category.
                </p>
              </div>

              <div className={styles.typeCard}>
                <h3>No-Bake Cookies</h3>
                <p>
                  Made without an oven, often using stovetop cooking or simple mixing. 
                  Great for hot weather or quick treats.
                </p>
              </div>
            </div>
          </section>

          {/* Fun Facts Section */}
          <section className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🎉</span>
              <h2 className={styles.sectionTitle}>Fun Cookie Facts</h2>
            </div>
            <div className={styles.factsList}>
              <div className={styles.factItem}>
                <span className={styles.factNumber}>1</span>
                <p>The chocolate chip cookie was invented by accident in 1938 by Ruth Wakefield</p>
              </div>
              <div className={styles.factItem}>
                <span className={styles.factNumber}>2</span>
                <p>Americans consume over 2 billion cookies per year</p>
              </div>
              <div className={styles.factItem}>
                <span className={styles.factNumber}>3</span>
                <p>The world's largest cookie weighed over 40,000 pounds</p>
              </div>
              <div className={styles.factItem}>
                <span className={styles.factNumber}>4</span>
                <p>Oreos are the best-selling cookie brand in the United States</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}