import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import TerminalCard from '../../common/TerminalCard/TerminalCard';
import styles from './About.module.css';

const jsonText = `{
  "name": "Prem Kumar Mekala",
  "role": "Software Developer",
  "company": "Quantum Works Pvt. Ltd.",
  "location": "Hyderabad, India",
  "core_competencies": [
    "React Architecture",
    "Reusable Components",
    "REST API Integration",
    "Responsive UI Development",
    "Clean Code Practices"
  ],
  "learning": [
    "Spring Boot",
    "Hibernate/JPA",
    "Java Full Stack"
  ]
}`;

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setIsTyping(true);
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText((prev) => prev + jsonText.charAt(index));
        index++;
        if (index >= jsonText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 15);
      return () => clearInterval(interval);
    }
  }, [isInView]);
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
              Professional Software Developer
            </h3>

            <p className={styles.text}>
              I am a Software Developer at Quantum Works Pvt. Ltd. with a specialized focus on building production-ready frontend architectures. My day-to-day involves architecting scalable <strong>React applications</strong> and developing <strong>Reusable UI Components</strong> that accelerate development cycles and ensure design consistency across platforms.
            </p>

            <p className={styles.text}>
              My technical expertise centers around <strong>JavaScript</strong>, <strong>React</strong>, and seamless <strong>REST API Integration</strong> to deliver dynamic, data-driven user experiences. I take a meticulous approach to <strong>Responsive UI Development</strong>, ensuring perfect functionality across all device ecosystems.
            </p>

            <p className={styles.text}>
              Guided by a commitment to <strong>Clean Code</strong> principles and modern web standards, I build maintainable solutions designed for long-term scalability. I am currently expanding my full-stack capabilities by diving deep into <strong>Java Full Stack</strong> development with Spring Boot, reinforcing my dedication to continuous technical growth.
            </p>
          </div>

          {/* Terminal card */}
          <div className={`col-md-5 ${styles.jsonWrapper}`} ref={containerRef}>
            <TerminalCard title="prem_kumar.json">
              <pre className={styles.codeSnippet}>
{displayedText}
<span className={styles.cursor} style={{ opacity: isTyping ? 1 : (displayedText.length === jsonText.length ? 0 : 1), display: 'inline-block', width: '8px', height: '1em', backgroundColor: 'var(--primary)', verticalAlign: 'middle', animation: isTyping ? 'none' : 'blink 1s step-end infinite' }}></span>
              </pre>
            </TerminalCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
