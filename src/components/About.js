const About = () => {
  return (
    <section className="About">
    <h1 className="About-title">👋 About Me</h1>
    <div className="About-container">
        <h3 className="About-greeting">🌱 안녕하세요, 저는 김민경입니다.</h3>
        <p className="About-content">
        &nbsp; 새로운 기술에 대한 호기심과 배우려는 자세를 가장 큰 강점으로 삼고 있습니다. <br />
        &nbsp; 대학에서 웹 개발을 시작해 <span className="highlight">풀스택 국비교육</span>과 <span className="highlight">React + Spring Boot</span>를 중심으로 한<br />
        팀 프로젝트, 개인 프로젝트를 통해 실무에 필요한 역량을 키워왔으며, <span className="highlight">AWS 배포</span> 경험도 보유하고 있습니다. <br />
        &nbsp; 앞으로도 기술과 협업 능력을 함께 성장시키며 실무에서 즉시 활용 가능한 개발자가 되겠습니다.
        </p>
    </div>
    </section>
  );
};

export default About;
