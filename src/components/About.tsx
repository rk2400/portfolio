interface AboutProps {
  isActive: boolean
}

const About = ({ isActive }: AboutProps) => {
  const certifications = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      image: "/assets/images/icon-dev.svg"
    },
    {
      id: 2,
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-789012",
      image: "/assets/images/icon-app.svg"
    },
    {
      id: 3,
      name: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "AZ-345678",
      image: "/assets/images/icon-design.svg"
    },
    {
      id: 4,
      name: "Certified Scrum Master (CSM)",
      issuer: "Scrum Alliance",
      date: "2022",
      credentialId: "CSM-901234",
      image: "/assets/images/icon-photo.svg"
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

  return (
    <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way. I created web design for many famous brand companies.
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