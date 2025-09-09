const About = () => {
  return (
    <section className="About">
    <h1 className="About-title">👋 About Me</h1>
    <div className="About-container">
        <h3 className="About-greeting">🌱 안녕하세요, 저는 개발자가 되고 싶은 김민경입니다.</h3>
        <p className="About-content">
        &nbsp; 저는 개발, 마케팅, 영상 편집, 유튜브 채널 운영 등 다양한 경험을 쌓아온 만능형 도전자입니다.
        &nbsp; 파이썬, AI 등 최신 기술에도 관심이 많으며, 배우고 성장하는 속도에는 자신이 있습니다.
        &nbsp; 급여보다는 함께 성장하고 새로운 가치를 만들어가는 경험을 가장 소중하게 생각합니다.
        <br /> <span className="highlight">귀사와 함께 더 큰 성장을 만들어가고 싶습니다!</span>
        <br /> <br />
          <p className="About-content2">&nbsp; 대학에서 웹 개발을 시작해 <span className="highlight">풀스택 국비교육을 수료</span>하였고 <span className="highlight">React + Spring Boot</span>를 중심으로 한 
          팀 프로젝트, 개인 프로젝트를 통해 실무에 필요한 역량을 키워왔으며, <span className="highlight">AWS 배포</span> 경험도 보유하고 있습니다. <br />
          &nbsp; 앞으로도 기술과 협업 능력을 함께 성장시키며 실무에서 즉시 활용 가능한 개발자가 되겠습니다.
          </p>
        </p>
    </div>
    </section>
  );
};

export default About;
