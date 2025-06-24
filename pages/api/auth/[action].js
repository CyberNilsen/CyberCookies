import fs from 'fs'
import path from 'path'
import { serialize } from 'cookie'

const USERS_FILE = path.join(process.cwd(), 'users.txt')

function readUsers() {
  try {
    if (fs.existsSync(USERS_FILE)) {
      const data = fs.readFileSync(USERS_FILE, 'utf8')
      return data.split('\n').filter(line => line.trim()).map(line => {
        const [email, password, name, createdAt, id] = line.split('|')
        return { email, password, name, createdAt, id }
      })
    }
    return []
  } catch (error) {
    return []
  }
}

function writeUser(user) {
  const userLine = `${user.email}|${user.password}|${user.name}|${user.createdAt}|${user.id}\n`
  fs.appendFileSync(USERS_FILE, userLine)
}

function generateToken() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export default function handler(req, res) {
  const { method } = req
  const { action } = req.query

  if (method === 'POST') {
    if (action === 'login') {
      const { email, password } = req.body
      
      if (!email || !password) {
        return res.status(400).json({ success: false, error: 'Email and password required' })
      }

      const users = readUsers()
      const user = users.find(u => u.email === email && u.password === password)
      
      if (user) {
        const token = generateToken()
        const userData = {
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt
        }

        const cookie = serialize('auth_token', `${token}|${user.id}`, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 7,
          path: '/'
        })

        res.setHeader('Set-Cookie', cookie)
        return res.status(200).json({ success: true, user: userData })
      } else {
        return res.status(401).json({ success: false, error: 'Invalid credentials' })
      }
    }

    if (action === 'signup') {
      const { email, password, confirmPassword } = req.body
      
      if (!email || !password || !confirmPassword) {
        return res.status(400).json({ success: false, error: 'All fields required' })
      }

      if (password !== confirmPassword) {
        return res.status(400).json({ success: false, error: 'Passwords do not match' })
      }

      if (password.length < 6) {
        return res.status(400).json({ success: false, error: 'Password must be at least 6 characters' })
      }

      const users = readUsers()
      const existingUser = users.find(u => u.email === email)
      
      if (existingUser) {
        return res.status(400).json({ success: false, error: 'User already exists' })
      }

      const newUser = {
        id: Date.now().toString(),
        email: email,
        password: password,
        name: email.split('@')[0],
        createdAt: new Date().toISOString()
      }

      writeUser(newUser)
      
      const token = generateToken()
      const userData = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        createdAt: newUser.createdAt
      }

     
      const cookie = serialize('auth_token', `${token}|${newUser.id}`, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      })

      res.setHeader('Set-Cookie', cookie)
      return res.status(201).json({ success: true, user: userData })
    }

    if (action === 'logout') {
      const cookie = serialize('auth_token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 0,
        path: '/'
      })

      res.setHeader('Set-Cookie', cookie)
      return res.status(200).json({ success: true })
    }
  }

  if (method === 'GET' && action === 'me') {
    const { auth_token } = req.cookies
    
    if (!auth_token) {
      return res.status(401).json({ success: false, error: 'Not authenticated' })
    }

    const [token, userId] = auth_token.split('|')
    const users = readUsers()
    const user = users.find(u => u.id === userId)
    
    if (user) {
      const userData = {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt
      }
      return res.status(200).json({ success: true, user: userData })
    } else {
      return res.status(401).json({ success: false, error: 'Invalid token' })
    }
  }

  res.status(405).json({ error: 'Method not allowed' })
}