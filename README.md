# 🍪 CyberCookies

A delicious cookie recipe management web application built with Next.js and React. This project serves as a hands-on learning experience for understanding modern web development concepts including React components, authentication, server-side rendering, and HTTP cookies.

![CyberCookies](https://github.com/user-attachments/assets/e22fc4fe-e401-4952-b459-b626f5016f18)

## 🎯 Project Purpose

CyberCookies was created as an educational project to explore and understand:

- **React & Next.js**: Component-based architecture, hooks, and server-side rendering
- **Authentication Systems**: User registration, login, and session management
- **HTTP Cookies**: Secure authentication tokens and automatic login functionality
- **Full-Stack Development**: Frontend-backend communication and API design
- **File-Based Storage**: Simple credential storage without database complexity

While the theme is all about delicious cookies and recipes, the real focus is learning fundamental web development concepts in a fun, practical way!

## ✨ Features

- 🔐 **User Authentication**: Secure signup and login system
- 🍪 **Cookie-Based Sessions**: Automatic login with HTTP-only cookies
- 📊 **User Dashboard**: Personal stats, recent recipes, and quick actions
- 📝 **Recipe Management**: Save, browse, and favorite cookie recipes
- 🎨 **Responsive Design**: Beautiful UI with modern CSS modules
- 🔒 **Server-Side Security**: Credentials stored securely on the server
- 🚀 **Auto-Redirects**: Smart routing based on authentication status

## 🛠️ Tech Stack

- **Frontend**: React 18, Next.js 13
- **Authentication**: Custom JWT-like tokens with HTTP-only cookies
- **Storage**: File-based user credentials (no database required)
- **Styling**: CSS Modules with modern design
- **Icons**: Emoji-based icons for a fun, lightweight approach

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CyberNilsen/CyberCookies.git
   cd CyberCookies
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install additional required packages**
   ```bash
   npm install cookie
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Project Structure

```
cybercookies/
├── pages/
│   ├── api/
│   │   └── auth/
│   │       └── [action].js      # Authentication API endpoints
│   ├── login.js                 # Login/Signup page
│   ├── dashboard.js             # User dashboard
│   └── index.js                 # Home page
├── contexts/
│   └── AuthContext.js           # Authentication context provider
├── components/
│   ├── Layout.js                # Main layout component
│   ├── Navbar.js                # Navigation bar
│   └── Footer.js                # Footer component
├── styles/
│   ├── Login.module.css         # Login page styles
│   ├── Dashboard.module.css     # Dashboard styles
│   └── globals.css              # Global styles
├── middleware.js                # Route protection middleware
├── users.txt                    # User credentials storage (auto-generated)
└── README.md
```

## 🔧 How It Works

### Authentication Flow

1. **User Registration**: New users sign up with email/password
2. **Credential Storage**: User data is stored in a simple `users.txt` file
3. **Cookie Creation**: Upon successful login, an HTTP-only cookie is set
4. **Auto-Login**: Middleware checks cookies and redirects users appropriately
5. **Session Management**: Users stay logged in for 7 days or until logout

### File-Based Storage

Instead of using a database, this project uses a simple text file (`users.txt`) to store user credentials:

```
email|password|name|createdAt|id
user@example.com|password123|user|2024-01-01T00:00:00.000Z|1704067200000
```

### API Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration  
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

## 🍪 Understanding Cookies (The Technical Kind!)

This project demonstrates several important concepts about HTTP cookies:

- **HTTP-Only Cookies**: Cannot be accessed by client-side JavaScript (prevents XSS attacks)
- **Secure Cookies**: Only sent over HTTPS in production
- **SameSite Protection**: Prevents CSRF attacks
- **Automatic Inclusion**: Browser automatically sends cookies with requests
- **Expiration**: Cookies automatically expire after 7 days

## 🎓 Learning Outcomes

By exploring this project, you'll understand:

- How React components communicate through context
- Server-side rendering with Next.js
- API route creation and middleware
- Authentication token management
- Cookie security best practices
- File I/O operations in Node.js
- Form handling and validation
- CSS Modules for component styling

## 🔒 Security Notes

This is an educational project with simplified security:

- Passwords are stored in plain text (not recommended for production)
- File-based storage is not scalable (use databases in real projects)
- Error handling is basic (production apps need comprehensive error handling)

For production applications, consider:
- Password hashing (bcrypt)
- Database storage (PostgreSQL, MongoDB)
- Environment variables for secrets
- Rate limiting and input validation
- HTTPS enforcement

## 🤝 Contributing

This is primarily an educational project, but contributions are welcome! Feel free to:

- Add new features or pages
- Improve the styling
- Enhance security measures  
- Add more cookie recipes! 🍪

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Created as a learning project to understand React, Next.js, and web authentication
- Cookie emoji used throughout for theming 🍪
- Inspired by the desire to make learning web development fun and delicious!

---

**Happy Coding and Happy Baking! 🍪👨‍💻**
