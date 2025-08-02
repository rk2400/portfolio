import { useState } from 'react'

interface PortfolioProps {
  isActive: boolean
}

const Portfolio = ({ isActive }: PortfolioProps) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showSelectList, setShowSelectList] = useState(false)

  // --- BEGIN: Rachit Khurana's GitHub Projects ---
  const projects = [
    // Web Development Projects (4)
    {
      id: 1,
      title: "bookspot",
      category: "Web Development",
      image: "/assets/images/project-1.jpg",
      link: "https://github.com/rk2400/bookspot",
      description: "A web app for discovering and sharing books. Built with HTML, CSS, and JavaScript."
    },
    {
      id: 2,
      title: "Minor1",
      category: "Web Development",
      image: "/assets/images/project-2.png",
      link: "https://github.com/rk2400/Minor1",
      description: "A JavaScript-based project focused on interactive web features."
    },
    {
      id: 3,
      title: "Major",
      category: "Web Development",
      image: "/assets/images/project-4.png",
      link: "https://github.com/rk2400/Major",
      description: "A major academic project built with HTML and JavaScript."
    },
    {
      id: 4,
      title: "bankist",
      category: "Web Development",
      image: "/assets/images/project-5.png",
      link: "https://github.com/rk2400/bankist",
      description: "A modern banking app simulation using JavaScript."
    },
    // UiPath Projects (2)
    {
      id: 5,
      title: "UiPath Automation",
      category: "UiPath",
      image: "/assets/images/project-6.png",
      link: "#",
      description: "Automated business processes using UiPath RPA platform."
    },
    {
      id: 6,
      title: "Data Processing Bot",
      category: "UiPath",
      image: "/assets/images/project-7.png",
      link: "#",
      description: "Intelligent data processing and validation automation."
    },
    // SAP Projects (5)
    {
      id: 7,
      title: "SAP ERP Integration",
      category: "SAP",
      image: "/assets/images/project-8.jpg",
      link: "#",
      description: "Enterprise resource planning system integration and optimization."
    },
    {
      id: 8,
      title: "SAP Analytics",
      category: "SAP",
      image: "/assets/images/project-9.png",
      link: "#",
      description: "Advanced analytics and reporting solutions for SAP systems."
    },
    {
      id: 9,
      title: "SAP Business Process",
      category: "SAP",
      image: "/assets/images/project-1.jpg",
      link: "#",
      description: "Streamlined business process management and automation."
    },
    {
      id: 10,
      title: "SAP Data Migration",
      category: "SAP",
      image: "/assets/images/project-2.png",
      link: "#",
      description: "Comprehensive data migration and transformation solutions."
    },
    {
      id: 11,
      title: "SAP Custom Development",
      category: "SAP",
      image: "/assets/images/project-3.jpg",
      link: "#",
      description: "Custom SAP development and enhancement projects."
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
              className={activeFilter === 'web development' ? 'active' : ''} 
              data-filter-btn
              onClick={() => handleFilterClick('web development')}
            >
              Web Development
            </button>
          </li>
          <li className="filter-item">
            <button 
              className={activeFilter === 'uipath' ? 'active' : ''} 
              data-filter-btn
              onClick={() => handleFilterClick('uipath')}
            >
              UiPath
            </button>
          </li>
          <li className="filter-item">
            <button 
              className={activeFilter === 'sap' ? 'active' : ''} 
              data-filter-btn
              onClick={() => handleFilterClick('sap')}
            >
              SAP
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
               activeFilter === 'web development' ? 'Web Development' :
               activeFilter === 'uipath' ? 'UiPath' :
               activeFilter === 'sap' ? 'SAP' : 'All'}
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
                onClick={() => handleSelectClick('web development')}
              >
                Web Development
              </button>
            </li>
            <li className="select-item">
              <button 
                data-select-item
                onClick={() => handleSelectClick('uipath')}
              >
                UiPath
              </button>
            </li>
            <li className="select-item">
              <button 
                data-select-item
                onClick={() => handleSelectClick('sap')}
              >
                SAP
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