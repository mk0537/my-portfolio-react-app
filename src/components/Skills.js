const Skills = () => {
  return (
    <section className="Skills" id="skills">
        <h2 className="Skills-title">🛠 Skills</h2>

        <div className="Skills-container">
            {/* Backend */}
            <div className="Skill-card">
            <h3 className="Skills-subtitle">🔧 Backend</h3>
            <ul className="Skills-ul">
                <li>💻 Java / Spring Boot / Spring Security</li>
                <li>🔗 CORS 설정 / WebMvcConfig</li>
                <li>🗄️ JPA / Hibernate / MySQL (RDS)</li>
                <li>🔐 JWT 인증 토큰 발급 / 회원가입 유효성 검사</li>
                <li>🔁 RESTful API / 임시 비밀번호 재설정</li>
                <li>📁 파일 업로드 / 외부 API 연동</li>
            </ul>
        </div>

            {/* Frontend */}
        <div className="Skill-card">
            <h3 className="Skills-subtitle">🎨 Frontend</h3>
            <ul className="Skills-ul">
                <li>⚛️ React / React Router</li>
                <li>📡 Axios / fetch / localStorage</li>
                <li>📝 Toast UI Editor (이미지 업로드 포함)</li>
                <li>🔐 로그인 / 회원가입 컴포넌트 기반 UI</li>
                <li>💬 게시글 작성, 조회, 수정, 삭제</li>
                <li>❤️ 댓글 / 좋아요 / 회원 정보 수정</li>
                 <li>🔍 ID, 비밀번호 찾기</li>
            </ul>
        </div>

            {/* DevOps & Tools */}
        <div className="Skill-card">
            <h3 className="Skills-subtitle">⚙️ DevOps & Tools</h3>
            <ul className="Skills-ul">
                <li>☁️ AWS (EC2, RDS, Elastic Beanstalk)</li>
                <li>🐳 Git / GitHub</li>
                <li>🔍 Postman / MySQL</li>
            </ul>
            </div>
        </div>
    </section>
  );
};

export default Skills;
