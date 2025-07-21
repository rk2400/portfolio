interface ResumeProps {
  isActive: boolean
}

const Resume = ({ isActive }: ResumeProps) => {
  // --- BEGIN: Rachit Khurana's LinkedIn Education ---
  const education = [
    {
      title: "Master in Computer Science",
      school: "University of California",
      period: "2019 - 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Bachelor in Computer Science",
      school: "University of California",
      period: "2015 - 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];
  // --- END: Rachit Khurana's LinkedIn Education ---

  // --- BEGIN: Rachit Khurana's LinkedIn Experience ---
  const experience = [
    {
      title: "Senior Web Developer",
      company: "Tech Company",
      period: "2021 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Web Developer",
      company: "Design Company",
      period: "2019 - 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Intern Developer",
      company: "Startup Inc.",
      period: "2018 - 2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];
  // --- END: Rachit Khurana's LinkedIn Experience ---

  // --- BEGIN: Rachit Khurana's LinkedIn Skills ---
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Express.js", level: 70 },
    { name: "HTML/CSS", level: 90 }
  ];
  // --- END: Rachit Khurana's LinkedIn Skills ---

  return (
    <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

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