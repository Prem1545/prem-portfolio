import React from 'react';
import { Download } from 'lucide-react';
import TerminalCard from '../../components/TerminalCard/TerminalCard';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={`section section-alt ${styles.about}`}>
      <div className="container">

        <div className="section-header">
          <span className="section-label">Who I am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="row align-items-center">

          {/* Bio text */}
          <div className="col-md-7 mb-5 mb-md-0">
            <h3 className={styles.heading}>
              Passionate Software & Frontend Developer
            </h3>

            <p className={styles.text}>
              I am a dedicated <strong>Frontend Developer</strong> with a strong foundation in modern web technologies. I specialize in building highly responsive, interactive, and user-centric applications using <strong>React</strong> and <strong>JavaScript</strong>.
            </p>

            <p className={styles.text}>
              My technical expertise spans across <strong>HTML5, CSS3, Bootstrap, and Core Java</strong>, allowing me to understand both the frontend aesthetics and the underlying programmatic logic. I am deeply committed to <strong>Responsive Web Development</strong> and strictly adhere to <strong>Clean Code Practices</strong> to ensure maintainable, scalable, and high-performance applications.
            </p>

            <p className={styles.text}>
              Whether it's developing dynamic web portals, interactive dashboards, or crafting seamless user experiences, I approach every project with a problem-solving mindset and a drive to deliver premium quality results.
            </p>

            <div className="mt-4">
              <a
                href="/Prem_Kumar_Mekala_Resume.pdf"
                download="Prem_Kumar_Mekala_Resume.pdf"
                className="btn-primary-custom"
                id="about-download-resume"
              >
                Download Resume <Download size={16} />
              </a>
            </div>
          </div>

          {/* Terminal card */}
          <div className="col-md-5">
            <TerminalCard title="prem.json">
              <pre className={styles.codeSnippet}>
{`{
  "name": "Prem Kumar Mekala",
  "role": "Software & Frontend Developer",
  "location": "India",
  "core_skills": [
    "React Development",
    "JavaScript",
    "HTML5 / CSS3",
    "Bootstrap",
    "Core Java"
  ],
  "focus": [
    "Responsive Web Development",
    "Clean Code Practices",
    "Performance Optimization"
  ],
  "availableForHire": true
}`}
              </pre>
            </TerminalCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
