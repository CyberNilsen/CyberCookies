

import { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Login.module.css'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [isSignup, setIsSignup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted with:', { email, password })

    alert('Login functionality will be implemented later!')
  }

  const toggleMode = () => {
    setIsSignup(!isSignup)

    setEmail('')
    setPassword('')
  }

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          
          {}
          <div className={styles.loginHeader}>
            <div className={styles.cookieIcon}>🍪</div>
            <h1 className={styles.loginTitle}>
              {isSignup ? 'Join Cybercookies' : 'Welcome Back'}
            </h1>
            <p className={styles.loginSubtitle}>
              {isSignup 
                ? 'Create your account to start your cookie journey' 
                : 'Sign in to access your cookie recipes and favorites'
              }
            </p>
          </div>

          {}
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            
            {}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.formInput}
                placeholder="Enter your email"
                required
              />
            </div>

            {}
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.formLabel}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.formInput}
                placeholder="Enter your password"
                required
              />
            </div>

            {}
            {isSignup && (
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.formLabel}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={styles.formInput}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {}
            {!isSignup && (
              <div className={styles.formOptions}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.checkboxText}>Remember me</span>
                </label>
                <a href="#" className={styles.forgotPassword}>
                  Forgot password?
                </a>
              </div>
            )}

            {}
            <button type="submit" className={styles.submitButton}>
              {isSignup ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          {}
          <div className={styles.socialLogin}>
            <div className={styles.divider}>
              <span className={styles.dividerText}>Or continue with</span>
            </div>
            
            <div className={styles.socialButtons}>
              <button className={styles.socialButton}>
                <span className={styles.socialIcon}>🔍</span>
                Google
              </button>
              <button className={styles.socialButton}>
                <span className={styles.socialIcon}>📘</span>
                Facebook
              </button>
            </div>
          </div>

          {}
          <div className={styles.toggleMode}>
            <p className={styles.toggleText}>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <button 
                type="button" 
                onClick={toggleMode}
                className={styles.toggleButton}
              >
                {isSignup ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}