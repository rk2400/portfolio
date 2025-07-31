interface CertificationsProps {
  isActive: boolean
}

const Certifications = ({ isActive }: CertificationsProps) => {
  const certifications = [
    {
      id: 1,
      title: "SAP Certified Associate - SAP Fiori Application Developer",
      issuer: "SAP",
      image: "/src/assets/logos/sap.svg",
      date: "May 2025",
      description: "Certified in SAP Fiori application development with expertise in modern UI/UX design and responsive web applications."
    },
    {
      id: 2,
      title: "SAP Certified Associate - SAP Generative AI Developer",
      issuer: "SAP",
      image: "/src/assets/logos/sap.svg",
      date: "Mar 2025",
      description: "Certified in SAP Generative AI development with skills in Artificial Neural Networks and Prompt Engineering."
    },
    {
      id: 3,
      title: "SAP Certified Associate - Back-End Developer - ABAP Cloud",
      issuer: "SAP",
      image: "/src/assets/logos/sap.svg",
      date: "Feb 2025",
      description: "Certified ABAP Cloud developer with expertise in Object Oriented ABAP (OOABAP) and cloud-native development."
    },
    {
      id: 4,
      title: "SAP Certified Associate - Backend Developer - SAP Cloud Application Programming Model",
      issuer: "SAP",
      image: "/src/assets/logos/sap.svg",
      date: "Sep 2024",
      description: "Certified in SAP Cloud Application Programming Model (CAPM) for modern cloud-based application development."
    },
    {
      id: 5,
      title: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      image: "/src/assets/logos/microsoft.svg",
      date: "Jun 2025",
      description: "Certified Azure AI Engineer with expertise in artificial intelligence, machine learning, and AI solution development on Microsoft Azure."
    },
    {
      id: 6,
      title: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      image: "/src/assets/logos/aws-white.svg",
      date: "Mar 2025",
      description: "Certified AWS AI Practitioner with skills in Artificial Intelligence, Artificial Neural Networks, and Prompt Engineering on AWS platform."
    },
    {
      id: 7,
      title: "Industry Proficiency Foundation: Consumer",
      issuer: "Deloitte",
      image: "/src/assets/logos/deloitte.svg",
      date: "May 2024",
      description: "Certified in Consumer Behavior and industry proficiency foundations for consulting and business transformation."
    },
    {
      id: 8,
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      image: "/src/assets/logos/salesforce.svg",
      date: "Jan 2025",
      description: "Certified Salesforce AI Associate with expertise in Artificial Intelligence and Prompt Engineering on the Salesforce platform."
    }
  ]

  return (
    <article className={`certifications ${isActive ? 'active' : ''}`} data-page="certifications">
      <header>
        <h2 className="h2 article-title">Certifications</h2>
      </header>

      <section className="certifications-list">
        <ul className="certifications-grid">
          {certifications.map((cert) => (
            <li key={cert.id} className="certification-item">
              <a href="https://www.credly.com" target="_blank" rel="noopener noreferrer">
                <figure className="certification-banner-box">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                </figure>

                <div className="certification-content">
                  <div className="certification-meta">
                    <p className="certification-issuer">{cert.issuer}</p>
                    <span className="dot"></span>
                    <time dateTime={cert.date}>{cert.date}</time>
                  </div>

                  <h3 className="h3 certification-item-title">{cert.title}</h3>

                  <p className="certification-text">{cert.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Certifications 