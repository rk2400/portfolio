import { useState } from 'react'

interface AboutProps {
  isActive: boolean
}

const About = ({ isActive }: AboutProps) => {
  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued May 2023",
      credentialId: "",
      image: "/assets/images/icon-dev.svg"
    },
    {
      id: 2,
      name: "Google IT Support Professional Certificate",
      issuer: "Google/Coursera",
      date: "Issued Jan 2022",
      credentialId: "",
      image: "/assets/images/icon-app.svg"
    },
    {
      id: 3,
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "Issued Dec 2021",
      credentialId: "",
      image: "/assets/images/icon-design.svg"
    }
  ]

  const services = [
    {
      icon: "/assets/images/icon-design.svg",
      title: "Web design",
      description: "The most modern and high-quality design made at a professional level."
    },
    {
      icon: "/assets/images/icon-dev.svg",
      title: "Web development",
      description: "High-quality development of sites at the professional level."
    },
    {
      icon: "/assets/images/icon-app.svg",
      title: "Mobile apps",
      description: "Professional development of applications for iOS and Android."
    },
    {
      icon: "/assets/images/icon-photo.svg",
      title: "Photography",
      description: "I make high-quality photos of any category at a professional level."
    }
  ]

  const personalProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack React + Node.js e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/assets/images/project-1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Real-time collaborative task management with drag-and-drop interface",
      tech: ["Vue.js", "Firebase", "Socket.io"],
      image: "/assets/images/project-2.png",
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts and maps",
      tech: ["React", "OpenWeather API", "Leaflet Maps"],
      image: "/assets/images/project-3.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio built with React and TypeScript",
      tech: ["React", "TypeScript", "Vite", "CSS3"],
      image: "/assets/images/project-4.png",
      link: "#"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time messaging app with user authentication",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      image: "/assets/images/project-5.png",
      link: "#"
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "Recipe search app with filtering and favorites functionality",
      tech: ["React", "Spoonacular API", "LocalStorage"],
      image: "/assets/images/project-6.png",
      link: "#"
    }
  ]

  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Results-driven Software Engineer with a strong background in web application development and a passion for building scalable, user-centric solutions. Experienced in full-stack development, cloud technologies, and agile methodologies. Adept at collaborating with cross-functional teams to deliver high-quality products on time. Always eager to learn new technologies and take on challenging problems.
        </p>
        <p>
          My expertise includes React, Node.js, Express, MongoDB, AWS, and more. I enjoy contributing to open-source projects and continuously improving my skills through hands-on experience and certifications.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Certifications</h3>
        <ul className="testimonials-list has-scrollbar">
          {certifications.map((cert) => (
            <li key={cert.id} className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img src={cert.image} alt={cert.name} width="60" data-testimonials-avatar />
                </figure>
                <h4 className="h4 testimonials-item-title" data-testimonials-title>{cert.name}</h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p><strong>Issuer:</strong> {cert.issuer}</p>
                  <p><strong>Date:</strong> {cert.date}</p>
                  <p><strong>ID:</strong> {cert.credentialId}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default About 