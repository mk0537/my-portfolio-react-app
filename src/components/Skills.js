const Skills = () => {
  return (
    <section className="Skills" id="skills">
      <h2 className="Skills-title">🛠 Skills</h2>

      <div className="Skills-container">

        {/* Language */}
        <div className="Skill-card">
          <h3 className="Skills-subtitle">💻 Language</h3>
          <ul className="Skills-ul">
            <li>Java</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 / CSS3</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="Skill-card">
          <h3 className="Skills-subtitle">🔧 Backend</h3>
          <ul className="Skills-ul">
            <li>Spring Boot</li>
            <li>Spring Security</li>
            <li>JPA / Hibernate</li>
            <li>REST API</li>
            <li>JWT Authentication</li>
            <li>Validation</li>
          </ul>
        </div>

        {/* Frontend */}
        <div className="Skill-card">
          <h3 className="Skills-subtitle">🎨 Frontend</h3>
          <ul className="Skills-ul">
            <li>React</li>
            <li>jQuery</li>
            <li>Axios</li>
            <li>Fetch API</li>
          </ul>
        </div>

        {/* Database */}
        <div className="Skill-card">
          <h3 className="Skills-subtitle">🗄️ Database</h3>
          <ul className="Skills-ul">
            <li>MySQL</li>
            <li>MariaDB</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="Skill-card">
          <h3 className="Skills-subtitle">⚙️ Tools</h3>
          <ul className="Skills-ul">
            <li>GitHub</li>
            <li>Eclipse</li>
            <li>VS Code</li>
            <li>DBeaver</li>
            <li>Postman</li>
            <li>FileZilla</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;