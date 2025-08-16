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
      title: "CharitySphere",
      category: "Web Development",
      image: "/assets/images/project-1.jpg",      
      description: "MERN Stack Project for Event Management and PHP Framework for Donation Management System."
    },
    {
      id: 2,
      title: "Handicraft Store",
      category: "Web Development",
      image: "/assets/images/project-2.jpg",
      description: "Simple MERN Stack E-commerce Website for Handicrafts with payment gateway integration."
    },
    {
      id: 3,
      title: "Portfolio",
      category: "Web Development",
      image: "/assets/images/project-4.jpg",
      description: "Personal Portfolio Website built with HTML, CSS, and TypeScript."
    },
    {
      id: 4,
      title: "Brainwave",
      category: "Web Development",
      image: "/assets/images/project-5.jpg",
      description: "MERN stack application for total well being management including mental and physical health with firestore database."
    },
    // UiPath Projects (2)
    {
      id: 5,
      title: "UiPath Automation - Price Comparison Bot",
      category: "UiPath",
      image: "/assets/images/project-6.jpg",
      description: "Automated price comparison of products from different e-commerce websites using UiPath RPA platform."
    },
    {
      id: 6,
      title: "UiPath Automation - SAP Pruchase Order Creation Automation",
      category: "UiPath",
      image: "/assets/images/project-7.avif",
      description: "Automated SAP Pruchase Order Creation using UiPath RPA platform."
    },
    // SAP Projects (5)
    {
      id: 7,
      title: "SAP Mass Resource Creation",
      category: "SAP",
      image: "/assets/images/project-8.jpg",
      description: "Automated Mass Resource Creation using custom SAP Report with excel file upload functionality and ALV logs."
    },
    {
      id: 8,
      title: "SAP File Upload/Download/Display/Zip/Unzip Report",
      category: "SAP",
      image: "/assets/images/project-9.jpg",  
      description: "Custom Report to handle File Upload/Download/Display/Zip/Unzip functionality."
    },
    {
      id: 9,
      title: "SAP Custom Action Trigger and Email Function",
      category: "SAP",
      image: "/assets/images/project-10.jpg",
      description: "Custom Action Trigger and Email Function for Business Process Management."
    },
    {
      id: 10,
      title: "SAP Custom Report for Editable ALV and PDF Generation",
      category: "SAP",
      image: "/assets/images/project-11.jpg",
      description: "Custom Report for Editable ALV and PDF Generation."
    },
    {
      id: 11,
      title: "SAP BTP Application for Employee Management",
      category: "SAP",
      image: "/assets/images/project-12.jpg",
      description: "SAP BTP Application for Employee Management."
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
              <a href="#" rel="noopener noreferrer">
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