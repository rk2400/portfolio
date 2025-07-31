interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${isDark ? 'dark' : 'light'}`}>
          {/* @ts-ignore */}
          <ion-icon name={isDark ? "moon" : "sunny"}></ion-icon>
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle 