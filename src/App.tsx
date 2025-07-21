import { useState } from 'react'
import './style.css'
import Sidebar from './components/Sidebar.tsx'
import Navbar from './components/Navbar.tsx'
import About from './components/About.tsx'
import Resume from './components/Resume.tsx'
import Portfolio from './components/Portfolio.tsx'
import Blog from './components/Blog.tsx'
import Contact from './components/Contact.tsx'

function App() {
  const [activePage, setActivePage] = useState('about')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Always keep dark mode active
  if (typeof document !== 'undefined') {
    document.body.classList.add('dark-mode')
  }

  return (
    <main>
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
      <div className="main-content">
        <Navbar 
          activePage={activePage} 
          onPageChange={setActivePage} 
        />
        <About isActive={activePage === 'about'} />
        <Resume isActive={activePage === 'resume'} />
        <Portfolio isActive={activePage === 'portfolio'} />
        <Blog isActive={activePage === 'blog'} />
        <Contact isActive={activePage === 'contact'} />
      </div>
    </main>
  )
}

export default App
