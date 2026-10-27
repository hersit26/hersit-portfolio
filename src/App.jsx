
import "./App.css";

const skills = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Java", "Spring Boot"],
  },
  {
    title: "Databases",
    items: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    title: "Tools & Concepts",
    items: ["Git", "GitHub", "REST APIs", "Data Structures"],
  },
];

const projects = [
  {
    number: "01",
    title: "TeamFlow",
    category: "PROJECT MANAGEMENT",
    description:
      "A collaborative project management application for organizing projects, managing tasks, and keeping teams connected.",
    technologies: ["React", "Node.js", "Express", "SQLite", "Socket.IO"],
    github: "https://github.com/hersit26",
  },
  {
    number: "02",
    title: "Mini Social Media",
    category: "WEB APPLICATION",
    description:
      "A social media backend with user authentication and API functionality, built to practice secure application development.",
    technologies: ["Node.js", "Express", "SQLite", "JWT", "bcryptjs"],
    github: "https://github.com/hersit26",
  },
  {
    number: "03",
    title: "ShopNova",
    category: "FULL-STACK APPLICATION",
    description:
      "A product browsing application built with Java and Spring Boot, connected to a MySQL database.",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS"],
    github: "https://github.com/hersit26",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="arrow-icon"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="external-icon"
    >
      <path
        d="M14 4h6v6M20 4l-9 9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-eyebrow">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <a className="nav-mark" href="#home" aria-label="Go to home">
          <span className="nav-mark-dot" />
          <span>PORTFOLIO</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        <a className="nav-contact" href="#contact">
          Let's talk <ArrowIcon />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <p className="hero-intro">
          <span className="availability-dot" />
          HELLO, WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          Hersit Kumar
          <br />
          <span>Singh.</span>
        </h1>

        <h2 className="hero-role">
          Web Developer <span>|</span> Software Development Enthusiast
        </h2>

        <p className="hero-description">
          I'm passionate about web development and software engineering. I build
          practical applications using React, Java, JavaScript, and backend
          technologies. I enjoy solving problems, exploring new technologies,
          and creating useful projects while continuously improving my
          development skills.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowIcon />
          </a>
          <a
            className="button button-secondary"
            href="/RESUME.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View resume <ExternalIcon />
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/hersit26" target="_blank" rel="noreferrer">
            GitHub <ExternalIcon />
          </a>
          <span className="social-separator" />
          <a
            href="https://www.linkedin.com/in/hersit26/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ExternalIcon />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img
          className="profile-photo"
          src="/profile.jpg"
          alt="Portrait of Hersit Kumar Singh"
        />
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About">
        <span className="scroll-line" />
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="section container" id="about">
      <SectionHeading
        number="01"
        eyebrow="A LITTLE ABOUT ME"
        title="Building ideas into useful experiences."
        description="I enjoy learning how technology works and turning that knowledge into practical projects."
      />

      <div className="about-grid">
        <div className="about-main">
          <p className="about-lead">
            I believe good software combines thoughtful problem-solving with a
            simple, intuitive user experience.
          </p>
          <p>
            My development journey includes frontend interfaces, backend APIs,
            databases, and full-stack applications. Through hands-on projects,
            I keep improving my coding practices and learning how different
            technologies work together.
          </p>
          <p>
            I am currently focused on strengthening my development skills,
            building better projects, and preparing for software development
            opportunities.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-row">
            <span className="detail-label">FOCUS</span>
            <span>Web & Software Development</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">EDUCATION</span>
            <span>B.Tech — Computer Science & Engineering</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">CURRENTLY</span>
            <span>Learning, building, improving</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">LOCATION</span>
            <span>Uttar Pradesh, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-muted" id="skills">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="WHAT I WORK WITH"
          title="Skills & technologies."
          description="Tools and technologies I use while learning and building applications."
        />

        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionHeading
        number="03"
        eyebrow="SELECTED WORK"
        title="Projects I've been building."
        description="A selection of practical applications that help me apply concepts and learn by doing."
      />

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <div className="project-number">{project.number}</div>

            <div className="project-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <ExternalIcon />
            </a>
          </article>
        ))}
      </div>

      <a
        className="all-projects-link"
        href="https://github.com/hersit26"
        target="_blank"
        rel="noreferrer"
      >
        Explore GitHub profile <ArrowIcon />
      </a>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div>
          <div className="section-eyebrow">
            <span>04</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2>
            Have an opportunity
            <br />
            <span>or idea in mind?</span>
          </h2>

          <p>
            I'm interested in connecting with developers, learning from others,
            and exploring opportunities to build useful software.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="button button-primary"
            href="https://linkedin.com/in/hersit-kumar-singh-822902236"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ArrowIcon />
          </a>
          <a
            className="contact-github"
            href="https://github.com/hersit26"
            target="_blank"
            rel="noreferrer"
          >
            Explore my GitHub <ExternalIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Designed &amp; built with care.</p>

        <div className="footer-links">
          <a href="https://github.com/hersit26" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/hersit-kumar-singh-822902236"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
