import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Check if user is logged in on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('cybercookies_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  // Mock login function - replace with real API call
  const login = async (email, password) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock validation - in real app, this would be API validation
      if (email && password.length >= 6) {
        const userData = {
          id: Date.now(),
          email: email,
          name: email.split('@')[0],
          createdAt: new Date().toISOString()
        }
        
        setUser(userData)
        localStorage.setItem('cybercookies_user', JSON.stringify(userData))
        
        return { success: true, user: userData }
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  // Mock signup function - replace with real API call
  const signup = async (email, password, confirmPassword) => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match')
      }
      
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }
      
      // Mock user creation
      const userData = {
        id: Date.now(),
        email: email,
        name: email.split('@')[0],
        createdAt: new Date().toISOString()
      }
      
      setUser(userData)
      localStorage.setItem('cybercookies_user', JSON.stringify(userData))
      
      return { success: true, user: userData }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('cybercookies_user')
    router.push('/')
  }

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}