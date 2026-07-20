const About = () => {
  return (
    <section className="About">
      <h1 className="About-title">👋 About Me</h1>

      <div className="About-container">
        <h3 className="About-greeting">
          🌱 안녕하세요, 사용자 경험을 고민하는 개발자 김민경입니다.
        </h3>

        <p className="About-content">
          &nbsp; 저는 프론트엔드 실무 경험을 바탕으로 Java · Spring 웹 개발자로 성장하고 있는 개발자입니다.
          실무에서는 HTML, CSS, JavaScript, jQuery를 활용하여 화면 개발과 유지보수를 수행했으며,
          고객사의 의견을 직접 듣고 UI를 개선하며 사용자 관점에서 서비스를 고민하는 경험을 쌓았습니다.

          <br /><br />

          &nbsp; 현재는 React와 Spring Boot를 중심으로 개인 프로젝트를 개발하며
          백엔드 역량을 꾸준히 확장하고 있습니다.
          또한 Java와 Spring, 코딩 테스트를 지속적으로 학습하며
          실무에서 필요한 기본기를 다지고 있습니다.

          <br /><br />

          <p className="About-content2">
            &nbsp; 개발뿐 아니라 개인적으로 인스타그램 릴스, 유튜브 쇼츠, 틱톡 콘텐츠를 직접 기획하고 촬영·편집하며 운영하고 있습니다.
            사용자 반응과 데이터를 분석하여 콘텐츠를 개선하는 과정을 반복하면서
            사용자의 관점에서 생각하고 지속적으로 개선하는 습관을 길렀습니다.
            이러한 경험을 개발에도 적용하여 더 나은 사용자 경험을 만드는 개발자가 되고자 합니다.
          </p>
        </p>
      </div>
    </section>
  );
};

export default About;