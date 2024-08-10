import './AboutComponent.css';

const About = () => {
  const SkillBar = ({ name, level, color }) => (
    <div className="skill">
      <p>{name} {level}%</p>
      <div className="skill-bar">
        <div className="skill-level" style={{ width: `${level}%`, backgroundColor: color }}></div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <h2>A propos</h2>
          <hr />
          <p>
            Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation <strong>d'intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>. <br />
            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.<br />
            J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
          </p>
        </div>
        <div className="col-md-6 mb-4">
          <img id="apropo" src="src\assets\img\john-doe-about.jpg" alt="AboutMan" className="about-image" />
          <h3>Mes compétences</h3>
          <ul className="skills-list">
            <li>
              <SkillBar name="HTML" level={90} color="#e34f26" />
            </li>
            <li>
              <SkillBar name="CSS" level={80} color="#61dafb" />
            </li>
            <li>
              <SkillBar name="JavaScript" level={70} color="#f7df1e" />
            </li>
            <li>
              <SkillBar name="PHP" level={60} color="#008000" />
            </li>
            <li>
              <SkillBar name="React" level={50} color="#264de4" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
