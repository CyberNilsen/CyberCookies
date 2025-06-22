

import Layout from '../components/Layout'
import styles from '../styles/History.module.css'

export default function History() {
  const timeline = [
    {
      period: "7th Century AD",
      title: "The Beginning",
      description: "Early forms of cookies appeared in Persia, where sugar was first cultivated and baking techniques developed.",
      icon: "🏺"
    },
    {
      period: "Medieval Times",
      title: "European Expansion",
      description: "Cookies spread through Europe via trade routes. The Dutch and Germans became master cookie makers.",
      icon: "🏰"
    },
    {
      period: "1600s",
      title: "Colonial America",
      description: "European settlers brought cookie recipes to America. The word 'cookie' comes from Dutch 'koekje'.",
      icon: "🚢"
    },
    {
      period: "1938",
      title: "Chocolate Chip Revolution",
      description: "Ruth Wakefield invented chocolate chip cookies at the Toll House Inn, creating America's favorite cookie.",
      icon: "🍫"
    },
    {
      period: "1950s-60s",
      title: "Mass Production",
      description: "Commercial cookie production began, making cookies widely available in stores across the world.",
      icon: "🏭"
    },
    {
      period: "Present Day",
      title: "Artisan Renaissance",
      description: "Modern bakers combine traditional techniques with innovative flavors and dietary accommodations.",
      icon: "👨‍🍳"
    }
  ];

  const worldCookies = [
    {
      country: "Italy",
      name: "Biscotti",
      description: "Twice-baked cookies perfect for dipping in coffee or wine",
      flag: "🇮🇹"
    },
    {
      country: "France",
      name: "Macarons",
      description: "Delicate sandwich cookies made with almond flour and filled with ganache",
      flag: "🇫🇷"
    },
    {
      country: "Germany",
      name: "Lebkuchen",
      description: "Spiced honey cookies traditionally made during Christmas season",
      flag: "🇩🇪"
    },
    {
      country: "Mexico",
      name: "Polvorones",
      description: "Crumbly shortbread cookies dusted with powdered sugar",
      flag: "🇲🇽"
    },
    {
      country: "Japan",
      name: "Melon Pan",
      description: "Sweet bread with a crispy cookie crust, popular in Japanese bakeries",
      flag: "🇯🇵"
    },
    {
      country: "India",
      name: "Nankhatai",
      description: "Shortbread cookies flavored with cardamom and topped with nuts",
      flag: "🇮🇳"
    }
  ];

  return (
    <Layout>
      {}
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>The Sweet History of Cookies</h1>
          <p className={styles.pageDescription}>
            Journey through time to discover how cookies became one of the world's most beloved treats
          </p>
        </div>
      </section>

      {}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cookie Timeline</h2>
          <div className={styles.timeline}>
            {timeline.map((event, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>{event.icon}</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelinePeriod}>{event.period}</div>
                  <h3 className={styles.timelineTitle}>{event.title}</h3>
                  <p className={styles.timelineDescription}>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className={styles.worldSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cookies Around the World</h2>
          <div className={styles.worldGrid}>
            {worldCookies.map((cookie, index) => (
              <div key={index} className={styles.worldCard}>
                <div className={styles.worldFlag}>{cookie.flag}</div>
                <div className={styles.worldContent}>
                  <h3 className={styles.worldCountry}>{cookie.country}</h3>
                  <h4 className={styles.worldName}>{cookie.name}</h4>
                  <p className={styles.worldDescription}>{cookie.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className={styles.factsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sweet Cookie Facts</h2>
          <div className={styles.factsGrid}>
            <div className={styles.factCard}>
              <div className={styles.factNumber}>1 Billion</div>
              <p>Pounds of cookies are consumed in the US annually</p>
            </div>
            <div className={styles.factCard}>
              <div className={styles.factNumber}>$18B</div>
              <p>Global cookie market value as of 2023</p>
            </div>
            <div className={styles.factCard}>
              <div className={styles.factNumber}>7 Billion</div>
              <p>Oreo cookies sold worldwide each year</p>
            </div>
            <div className={styles.factCard}>
              <div className={styles.factNumber}>500+</div>
              <p>Different types of cookies exist globally</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className={styles.evolutionSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How Cookies Changed the World</h2>
          <div className={styles.evolutionContent}>
            <div className={styles.evolutionText}>
              <h3>From Necessity to Pleasure</h3>
              <p>
                Cookies began as a practical solution for preserving bread during long sea voyages. 
                Bakers would create twice-baked breads that could last for months without spoiling. 
                Over time, these evolved from survival food into beloved treats that bring joy to 
                people of all ages.
              </p>
              
              <h3>Cultural Significance</h3>
              <p>
                Cookies have become deeply embedded in cultures worldwide. They're symbols of 
                hospitality, comfort, celebration, and tradition. From Christmas cookies to 
                wedding cookies, these sweet treats mark our most important moments and create 
                lasting memories.
              </p>

              <h3>Innovation and Adaptation</h3>
              <p>
                Today's cookie world continues to evolve with dietary needs and preferences. 
                Gluten-free, vegan, keto, and protein-enriched cookies ensure that everyone 
                can enjoy these timeless treats, proving that the love for cookies transcends 
                all boundaries.
              </p>
            </div>
            <div className={styles.evolutionImage}>
              <div className={styles.cookieStack}>
                <div className={styles.stackCookie}>🍪</div>
                <div className={styles.stackCookie}>🍫</div>
                <div className={styles.stackCookie}>🥜</div>
                <div className={styles.stackCookie}>🍯</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}