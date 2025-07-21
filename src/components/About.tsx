interface AboutProps {
  isActive: boolean
}

const About = ({ isActive }: AboutProps) => {
  const certifications = [
    {
      id: 1,
      name: "Certified Application Associate - SAP TM",
      issuer: "SAP",
      date: "2023",
      credentialId: "SAP-TM-001",
      image: "/src/assets/logos/sap.svg"
    },
    {
      id: 2,
      name: "Certified Application Associate - SAP S/4HANA",
      issuer: "SAP",
      date: "2022",
      credentialId: "SAP-S4-002",
      image: "/src/assets/logos/sap.svg"
    },
    {
      id: 3,
      name: "Certified Development Associate - ABAP with SAP NetWeaver",
      issuer: "SAP",
      date: "2021",
      credentialId: "SAP-ABAP-003",
      image: "/src/assets/logos/sap.svg"
    },
    {
      id: 4,
      name: "Certified Application Associate - SAP Fiori Application Developer",
      issuer: "SAP",
      date: "2021",
      credentialId: "SAP-FIORI-004",
      image: "/src/assets/logos/sap.svg"
    },
    {
      id: 5,
      name: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "AZ-345678",
      image: "/src/assets/logos/microsoft.svg"
    },
    {
      id: 6,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
      image: "/src/assets/logos/aws.svg"
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
        Analyst with 2.5 years of experience in SAP ABAP and SAP TM, specializing in technical object development and optimization. Adept at data analysis, problem-solving, process optimization and cross-functional collaboration to drive efficiency and innovation. Passionate about connecting with peers and sharing insights to foster continuous learning.
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
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    width="60" 
                    height="60" 
                    data-testimonials-avatar 
                    style={{ 
                      background: '#fff', 
                      borderRadius: '12px', 
                      padding: '8px', 
                      border: '1px solid #eee', 
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)', 
                      objectFit: 'contain', 
                      display: 'block', 
                      margin: '0 auto' 
                    }} 
                  />
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