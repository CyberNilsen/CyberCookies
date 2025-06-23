import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import styles from '../styles/Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { login, signup } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      let result
      if (isSignup) {
        result = await signup(email, password, confirmPassword)
      } else {
        result = await login(email, password)
      }

      if (result.success) {
        // Redirect to dashboard after successful login/signup
        router.push('/dashboard')
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const toggleMode = () => {
    setIsSignup(!isSignup)
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setError('')
  }

  return (
    <Layout>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          
          {/* Header */}
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

          {/* Error Message */}
          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            
            {/* Email Field */}
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
                disabled={loading}
              />
            </div>

            {/* Password Field */}
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
                disabled={loading}
              />
            </div>

            {/* Confirm Password Field (Signup only) */}
            {isSignup && (
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.formLabel}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.formInput}
                  placeholder="Confirm your password"
                  required
                  disabled={loading}
                />
              </div>
            )}

            {/* Form Options (Login only) */}
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
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Please wait...' : (isSignup ? 'Create Account' : 'Sign In')}
            </button>
          </form>

          {/* Social Login */}
          <div className={styles.socialLogin}>
            <div className={styles.divider}>
              <span className={styles.dividerText}>Or continue with</span>
            </div>
            
            <div className={styles.socialButtons}>
              <button className={styles.socialButton} disabled={loading}>
                <span className={styles.socialIcon}>🔍</span>
                Google
              </button>
              <button className={styles.socialButton} disabled={loading}>
                <span className={styles.socialIcon}>📘</span>
                Facebook
              </button>
            </div>
          </div>

          {/* Toggle Mode */}
          <div className={styles.toggleMode}>
            <p className={styles.toggleText}>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <button 
                type="button" 
                onClick={toggleMode}
                className={styles.toggleButton}
                disabled={loading}
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