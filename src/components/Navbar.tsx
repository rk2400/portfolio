interface NavbarProps {
  activePage: string
  onPageChange: (page: string) => void
}

const Navbar = ({ activePage, onPageChange }: NavbarProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.id} className="navbar-item">
            <button 
              className={`navbar-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => onPageChange(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar 