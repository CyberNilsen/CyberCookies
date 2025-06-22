// pages/login.js
// This creates the login page route at '/login'
// Currently only visual - no actual login functionality implemented

import { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Login.module.css'

export default function Login() {
  // State to track form input values
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // State to track if we're in login or signup mode
  const [isSignup, setIsSignup] = useState(false)

  // Handle form submission (currently just prevents default behavior)
  const handleSubmit = (e) => {
    e.preventDefault() // Prevents page from refreshing
    console.log('Form submitted with:', { email, password })
    // Here you would typically send data to your backend
    alert('Login functionality will be implemented later!')
  }

  // Toggle between login and signup forms
  const toggleMode = () => {
    setIsSignup(!isSignup)
    // Clear form when switching modes
    setEmail('')
    setPassword('')
  }

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          
          {/* Login Form Header */}
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

          {/* Login/Signup Form */}
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            
            {/* Email Input Field */}
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

            {/* Password Input Field */}
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

            {/* Additional fields for signup */}
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

            {/* Remember Me Checkbox (only for login) */}
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

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>
              {isSignup ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          {/* Social Login Options */}
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

          {/* Toggle between login and signup */}
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