import { useState } from 'react'
import ThemeToggle from './ThemeToggle.tsx'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  isDark: boolean
  onThemeToggle: () => void
}

const Sidebar = ({ isDark, onThemeToggle }: SidebarProps) => {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <aside className={`sidebar ${showContacts ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/images/Profile Pic.jpg" alt="Rachit Khurana" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Rachit Khurana">Rachit Khurana</h1>
          <p className="title">SAP ABAP Developer</p>
        </div>

        <button 
          className="info_more-btn" 
          data-sidebar-btn
          onClick={() => setShowContacts(!showContacts)}
        >
          {/* @ts-ignore */}
          <ion-icon 
            name="chevron-down" 
            style={{ transform: showContacts ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
          />
        </button>
      </div>

      <div className="sidebar-theme-toggle">
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              {/* @ts-ignore */}
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:rachit.khurana1124@gmail.com" className="contact-link">rachit.khurana1124@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* @ts-ignore */}
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">+91 9910124855</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* @ts-ignore */}
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">November 24, 2000</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              {/* @ts-ignore */}
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Vaishali Sector 1, Ghaziabad</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/rachit-khurana-3ba9ba188" className="social-link" target="_blank" rel="noopener noreferrer">
              {/* @ts-ignore */}
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/rk2400" className="social-link" target="_blank" rel="noopener noreferrer">
              {/* @ts-ignore */}
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="https://twitter.com/" className="social-link" target="_blank" rel="noopener noreferrer">
              {/* @ts-ignore */}
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar 