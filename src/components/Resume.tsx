interface ResumeProps {
  isActive: boolean
}

const Resume = ({ isActive }: ResumeProps) => {
  // --- BEGIN: Rachit Khurana's LinkedIn Education ---
  const education = [
    {
      title: "Master in Computer Application",
      school: "Lovely Professional University",
      period: "2022 - 2024",
      description: "Advanced study in computer science, software engineering, and business applications."
    },
    {
      title: "Bachelor in Computer Application",
      school: "University of California",
      period: "2019 - 2022",
      description: "Solid foundation in programming, databases, and IT fundamentals."
    }
  ];
  // --- END: Rachit Khurana's LinkedIn Education ---

  // --- BEGIN: Rachit Khurana's LinkedIn Experience ---
  const experience = [
    {
      title: "Analyst",
      company: "Deloitte",
      period: "2025 - Present",
      description: [
        "Assumed greater responsibility in key business functions, driving process improvements and enhancing cross functional collaboration for impactful decision making.",
        "Along with completing own deliverables, supported peers in upskilling within the niche area of SAP TM, contributing to the development of resources and preparing them to handle TM relevant objects."
      ]
    },
    {
      title: "Associate Analyst",
      company: "Deloitte ",
      period: "2023 - 2025",
      description: [
        "As an ABAP Developer within the TM Technical Team, capitalized on ABAP proficiency and niche expertise in Transportation Management (TM) to lead development tasks, aiming to transform and optimize transportation processes for the client.",
        "Successfully delivered over 43 custom objects along with implementing 23+ enhancements and resolving approximately 11 defects. Worked on multiple objects including IDOCs, OData, TM validations, reports, enhancements, conversions, and interfaces.",
        "Leveraged Generative AI technologies through prompt engineering to draft more than 42 technical and unit test documents, enhancing documentation and process optimization.",
        "Went beyond standard responsibilities by actively participating in research and information gathering, conducting over 16 POCs for new concepts to analyze feasibility for functional counterparts, and supporting peer skill development in SAP TM, thus contributing to the formation of a competent resource pool."
      ]
    },
    {
      title: "Intern Developer",
      company: "SAP Labs India",
      period: "2022 - 2023",
      description:[ "Performed API Testing and XSLT Transformation. Found & reported bugs along with creation of test samples for manual testing. Automated testing scenarios using an Internal Javascript automation tool."]
    }
  ];
  // --- END: Rachit Khurana's LinkedIn Experience ---

  // --- BEGIN: Rachit Khurana's LinkedIn Skills ---
  const skills = [
    { name: "SAP ABAP", level: 90 },
    { name: "SAP TM", level: 75 },
    { name: "SAP HANA", level: 65 },
    { name: "SAP Fiori", level: 50 },
    { name: "ReactJS", level: 75 },
    { name: "SQL", level: 70 },
    { name: "NoSQL", level: 70 },
    { name: "HTML/CSS", level: 90 },
    { name: "C++", level: 80 },
    { name: "PHP", level: 50 },
  ];
  // --- END: Rachit Khurana's LinkedIn Skills ---

  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Experience section moved above Education */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* @ts-ignore */}
            <ion-icon name="briefcase-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              {Array.isArray(item.description) ? (
                <ul className="timeline-text" style={{ paddingLeft: 18, margin: 0 }}>
                  {item.description.map((point, i) => (
                    <li key={i} style={{ marginBottom: 6 }}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="timeline-text">{item.description}</p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            {/* @ts-ignore */}
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.level}>{skill.level}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default Resume 