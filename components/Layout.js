// components/Layout.js
// This is a layout component that wraps around all pages
// It includes the navbar and footer that appear on every page
// This follows the DRY principle (Don't Repeat Yourself)

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      {/* Navbar appears at the top of every page */}
      <Navbar />
      
      {/* Main content area - this is where each page's content goes */}
      <main>
        {children} {/* This is where the page content gets inserted */}
      </main>
      
      {/* Footer appears at the bottom of every page */}
      <Footer />
    </div>
  )
}