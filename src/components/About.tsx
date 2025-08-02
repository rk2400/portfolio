interface AboutProps {
  isActive: boolean
}

const About = ({ isActive }: AboutProps) => {
  const skills = [
    {
      icon: "/assets/images/icon-dev.svg",
      title: "Technical Skills",
      description: "ABAP, C++, Web Technologies, SAP, SQL, AI/ML, JavaScript, TypeScript, React, Node.js, Python, Git, Docker, AWS, Azure."
    },
    {
      icon: "/assets/images/icon-design.svg",
      title: "Soft Skills",
      description: "Problem-solving, Analytical thinking, Cross-functional collaboration, Communication, Time management, Adaptability, Team leadership, Process optimization."
    },
    {
      icon: "/assets/images/icon-app.svg",
      title: "SAP TM",
      description: "OOABAP, CDS Views, BOPF Framework, ALV Reports, OData Services, IDOC Processing, SAP Fiori, NetWeaver Gateway, Business Objects."
    },
    {
      icon: "/assets/images/icon-photo.svg",
      title: "Photography",
      description: "Passionate about capturing moments through lens. Specializing in landscape and street photography. Love exploring new perspectives and creative compositions."
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
        <h3 className="h3 service-title">Skills</h3>
        <ul className="service-list">
          {skills.map((skill, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={skill.icon} alt={`${skill.title} icon`} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{skill.title}</h4>
                <p className="service-item-text">{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="core-values">
        <h3 className="h3 service-title">Core Values & Approach</h3>
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">
              {/* @ts-ignore */}
              <ion-icon name="bulb-outline"></ion-icon>
            </div>
            <h4 className="h4 value-title">Innovation-Driven</h4>
            <p className="value-text">Continuously exploring emerging technologies and best practices to deliver cutting-edge solutions that drive business transformation and competitive advantage.</p>
          </div>
          
          <div className="value-item">
            <div className="value-icon">
              {/* @ts-ignore */}
              <ion-icon name="shield-checkmark-outline"></ion-icon>
            </div>
            <h4 className="h4 value-title">Quality-First</h4>
            <p className="value-text">Adhering to enterprise-grade coding standards, comprehensive testing protocols, and robust error handling to ensure reliable, maintainable, and scalable solutions.</p>
          </div>
          
          <div className="value-item">
            <div className="value-icon">
              {/* @ts-ignore */}
              <ion-icon name="people-outline"></ion-icon>
            </div>
            <h4 className="h4 value-title">Collaborative Excellence</h4>
            <p className="value-text">Fostering cross-functional partnerships, knowledge sharing, and agile methodologies to deliver solutions that exceed stakeholder expectations and drive organizational success.</p>
          </div>
          
          <div className="value-item">
            <div className="value-icon">
              {/* @ts-ignore */}
              <ion-icon name="trending-up-outline"></ion-icon>
            </div>
            <h4 className="h4 value-title">Continuous Learning</h4>
            <p className="value-text">Committed to lifelong learning through certifications, industry conferences, and hands-on experimentation with emerging technologies to stay ahead of the curve.</p>
          </div>
        </div>
      </section>

      <section className="industry-expertise">
        <h3 className="h3 service-title">Industry Expertise</h3>
        <div className="expertise-content">
          <div className="expertise-item">
            <h4 className="h4 expertise-title">Enterprise Resource Planning (ERP)</h4>
            <p className="expertise-text">Deep expertise in SAP S/4HANA ecosystem, specializing in custom development, system integration, and process optimization for Fortune 500 companies across manufacturing, logistics, and retail sectors.</p>
          </div>
          
          <div className="expertise-item">
            <h4 className="h4 expertise-title">Supply Chain & Transportation</h4>
            <p className="expertise-text">Proven track record in SAP Transportation Management (TM) implementations, route optimization, freight management, and end-to-end logistics solutions that reduce costs and improve operational efficiency.</p>
          </div>
          
          <div className="expertise-item">
            <h4 className="h4 expertise-title">Digital Transformation</h4>
            <p className="expertise-text">Leading modernization initiatives through SAP Fiori UX, cloud migration strategies, API-first architectures, and integration with emerging technologies like AI/ML and IoT for next-generation enterprise solutions.</p>
          </div>
          
          <div className="expertise-item">
            <h4 className="h4 expertise-title">Data Analytics & Business Intelligence</h4>
            <p className="expertise-text">Expertise in CDS views, HANA modeling, real-time analytics, and business intelligence solutions that transform raw data into actionable insights for strategic decision-making.</p>
          </div>
        </div>
      </section>

      <section className="work-philosophy">
        <h3 className="h3 service-title">Work Philosophy</h3>
        <div className="philosophy-content">
          <div className="philosophy-principle">
            <h4 className="h4 principle-title">User-Centric Development</h4>
            <p className="principle-text">Every solution begins with understanding end-user needs, business processes, and stakeholder requirements. I believe in creating intuitive, efficient, and scalable applications that enhance user experience and drive productivity.</p>
          </div>
          
          <div className="philosophy-principle">
            <h4 className="h4 principle-title">Agile Excellence</h4>
            <p className="principle-text">Embracing iterative development, continuous feedback loops, and adaptive planning to deliver high-quality solutions rapidly while maintaining flexibility to accommodate evolving business needs and market dynamics.</p>
          </div>
          
          <div className="philosophy-principle">
            <h4 className="h4 principle-title">Performance Optimization</h4>
            <p className="principle-text">Committed to writing clean, efficient code with optimal database queries, minimal resource consumption, and robust error handling to ensure applications perform seamlessly under high load and complex business scenarios.</p>
          </div>
          
          <div className="philosophy-principle">
            <h4 className="h4 principle-title">Security & Compliance</h4>
            <p className="principle-text">Implementing enterprise-grade security measures, data protection protocols, and compliance standards to safeguard sensitive information while maintaining system integrity and regulatory adherence.</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default About 