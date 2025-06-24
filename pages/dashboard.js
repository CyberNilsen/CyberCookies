import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import styles from '../styles/Dashboard.module.css'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <Layout>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading your dashboard...</p>
        </div>
      </Layout>
    )
  }

  if (!user) {
    return null 
  }

  return (
    <Layout>
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome back, {user.name}! 🍪</h1>
          <p className={styles.subtitle}>Here's your cookie command center</p>
        </div>

        <div className={styles.grid}>
          {}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Your Cookie Stats</h3>
              <span className={styles.icon}>📊</span>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>12</span>
                <span className={styles.statLabel}>Recipes Saved</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>8</span>
                <span className={styles.statLabel}>Recipes Tried</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>95%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
            </div>
          </div>

          {}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Recent Recipes</h3>
              <span className={styles.icon}>📝</span>
            </div>
            <div className={styles.recipeList}>
              <div className={styles.recipeItem}>
                <span className={styles.recipeEmoji}>🍫</span>
                <div>
                  <h4>Chocolate Chip Cookies</h4>
                  <p>Saved 2 days ago</p>
                </div>
              </div>
              <div className={styles.recipeItem}>
                <span className={styles.recipeEmoji}>🥜</span>
                <div>
                  <h4>Peanut Butter Cookies</h4>
                  <p>Tried 1 week ago</p>
                </div>
              </div>
              <div className={styles.recipeItem}>
                <span className={styles.recipeEmoji}>🍓</span>
                <div>
                  <h4>Strawberry Sugar Cookies</h4>
                  <p>Saved 2 weeks ago</p>
                </div>
              </div>
            </div>
          </div>

          {}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Quick Actions</h3>
              <span className={styles.icon}>⚡</span>
            </div>
            <div className={styles.actions}>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>➕</span>
                Add New Recipe
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>🔍</span>
                Browse Recipes
              </button>
              <button className={styles.actionButton}>
                <span className={styles.actionIcon}>⭐</span>
                View Favorites
              </button>
            </div>
          </div>

          {}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Your Profile</h3>
              <span className={styles.icon}>👤</span>
            </div>
            <div className={styles.profile}>
              <div className={styles.profileInfo}>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Member since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
                <p><strong>Status:</strong> Cookie Enthusiast 🍪</p>
              </div>
              <button className={styles.profileButton}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}