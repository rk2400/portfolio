import { useState } from 'react'

interface PortfolioProps {
  isActive: boolean
}

const Portfolio = ({ isActive }: PortfolioProps) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showSelectList, setShowSelectList] = useState(false)

  // --- BEGIN: Rachit Khurana's GitHub Projects ---
  const projects = [
    {
      id: 1,
      title: "bookspot",
      category: "Web development",
      image: "/assets/images/project-1.jpg",
      link: "https://github.com/rk2400/bookspot",
      description: "A web app for discovering and sharing books. Built with HTML, CSS, and JavaScript."
    },
    {
      id: 2,
      title: "Minor1",
      category: "Web development",
      image: "/assets/images/project-2.png",
      link: "https://github.com/rk2400/Minor1",
      description: "A JavaScript-based project focused on interactive web features."
    },
    {
      id: 3,
      title: "Major",
      category: "Web development",
      image: "/assets/images/project-4.png",
      link: "https://github.com/rk2400/Major",
      description: "A major academic project built with HTML and JavaScript."
    },
    {
      id: 4,
      title: "bankist",
      category: "Web development",
      image: "/assets/images/project-5.png",
      link: "https://github.com/rk2400/bankist",
      description: "A modern banking app simulation using JavaScript."
    },
    {
      id: 5,
      title: "game",
      category: "Applications",
      image: "/assets/images/project-6.png",
      link: "https://github.com/rk2400/game",
      description: "A CSS-based game project."
    }
  ];
  // --- END: Rachit Khurana's GitHub Projects ---

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase())

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
  }

  const handleSelectClick = (filter: string) => {
    setActiveFilter(filter)
    setShowSelectList(false)
  }

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button 
              className={activeFilter === 'all' ? 'active' : ''} 
              data-filter-btn
              onClick={() => handleFilterClick('all')}
            >
              All
            </button>
          </li>
          <li className="filter-item">
            <button 
              className={activeFilter === 'web design' ? 'active' : ''} 
              data-filter-btn
              onClick={() => handleFilterClick('web design')}
            >
              Web design
            </button>
          </li>
          <li className="filter-item">
            <button 
              className={activeFilter === 'applications' ? 'active' : ''} 
              data-filter-btn
              onClick={() => handleFilterClick('applications')}
            >
              Applications
            </button>
          </li>
          <li className="filter-item">
            <button 
              className={activeFilter === 'web development' ? 'active' : ''} 
              data-filter-btn
              onClick={() => handleFilterClick('web development')}
            >
              Web development
            </button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button 
            className={`select-btn ${showSelectList ? 'active' : ''}`} 
            data-select
            onClick={() => setShowSelectList(!showSelectList)}
          >
            <div className="btn-text">
              {activeFilter === 'all' ? 'All' : 
               activeFilter === 'web design' ? 'Web design' :
               activeFilter === 'applications' ? 'Applications' :
               activeFilter === 'web development' ? 'Web development' : 'All'}
            </div>
            <div className="arrow-dwn">
              {/* @ts-ignore */}
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </button>

          <ul className={`select-list ${showSelectList ? 'active' : ''}`}>
            <li className="select-item">
              <button 
                data-select-item
                onClick={() => handleSelectClick('all')}
              >
                All
              </button>
            </li>
            <li className="select-item">
              <button 
                data-select-item
                onClick={() => handleSelectClick('web design')}
              >
                Web design
              </button>
            </li>
            <li className="select-item">
              <button 
                data-select-item
                onClick={() => handleSelectClick('applications')}
              >
                Applications
              </button>
            </li>
            <li className="select-item">
              <button 
                data-select-item
                onClick={() => handleSelectClick('web development')}
              >
                Web development
              </button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item active" data-filter-item data-category={project.category.toLowerCase()}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* @ts-ignore */}
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Portfolio 