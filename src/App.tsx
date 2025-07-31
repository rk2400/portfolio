import { useState } from 'react'
import './style.css'
import Sidebar from './components/Sidebar.tsx'
import Navbar from './components/Navbar.tsx'
import About from './components/About.tsx'
import Resume from './components/Resume.tsx'
import Portfolio from './components/Portfolio.tsx'
import Certifications from './components/Blog.tsx'
import Contact from './components/Contact.tsx'

function App() {
  const [activePage, setActivePage] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true) // Changed back to true for default dark mode

  // Handle theme changes
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (typeof document !== 'undefined') {
      if (isDarkMode) {
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
      } else {
        document.body.classList.add('dark-mode')
        document.body.classList.remove('light-mode')
      }
    }
  }

  // Initialize theme on mount
  if (typeof document !== 'undefined' && isDarkMode) { // Modified condition
    document.body.classList.add('dark-mode') // Added dark-mode
    document.body.classList.remove('light-mode') // Removed light-mode
  }

  return (
    <main>
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        isDark={isDarkMode}
        onThemeToggle={toggleTheme}
      />
      <div className="main-content">
        <Navbar
          activePage={activePage}
          onPageChange={setActivePage}
        />
        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />
        <Portfolio isActive={activePage === 'portfolio'} />
        <Certifications isActive={activePage === 'certifications'} />
        <Contact isActive={activePage === 'contact'} />
      </div>
    </main>
  )
}

export default App
