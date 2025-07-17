const Skills = () => {
  return (
    <section className="Skills" id="skills">
        <h2 className="Skills-title">🛠 Skills</h2>

        <div className="Skills-container">
            {/* Backend */}
            <div className="Skill-card">
            <h3 className="Skills-subtitle">🔧 Backend</h3>
            <ul className="Skills-ul">
                <li>💻 <strong>Java</strong> / <strong>Spring Boot</strong> / <strong>Spring Security</strong></li>
                <li>🔗 <strong>CORS</strong> 설정 / <strong>WebMvcConfig</strong></li>
                <li>🗄️ <strong>JPA</strong> / <strong>Hibernate</strong> / <strong>MySQL (RDS)</strong></li>
                <li>🔐 <strong>JWT 인증 토큰 발급</strong> / 회원가입 <strong>유효성 검사</strong></li>
                <li>🔁 <strong>RESTful API</strong> / <strong>임시 비밀번호</strong> 재설정</li>
                <li>📁 <strong>파일 업로드</strong> / <strong>외부 API</strong> 연동</li>
                {/* <li>🔍 <strong>Naver Book API</strong> 연동</li> */}
            </ul>
            </div>

            {/* Frontend */}
            <div className="Skill-card">
            <h3 className="Skills-subtitle">🎨 Frontend</h3>
            <ul className="Skills-ul">
                <li>⚛️ <strong>React</strong> / <strong>React Router</strong></li>
                <li>📡 <strong>Axios</strong> / <strong>fetch</strong> / <strong>localStorage</strong></li>
                <li>📝 <strong>Toast UI Editor</strong> (이미지 업로드 포함)</li>
                <li>🔐 <strong>로그인 / 회원가입</strong> 컴포넌트 기반 UI</li>
                <li>💬 <strong>게시글 작성, 조회, 수정, 삭제</strong></li>
                <li>❤️ <strong>댓글</strong> / <strong>좋아요</strong> / <strong>회원 정보 수정</strong></li>
                 <li>🔍 <strong>ID, 비밀번호 찾기</strong></li>
            </ul>
            </div>

            {/* DevOps & Tools */}
            <div className="Skill-card">
            <h3 className="Skills-subtitle">⚙️ DevOps & Tools</h3>
            <ul className="Skills-ul">
                <li>☁️ <strong>AWS</strong> (EC2, RDS, Elastic Beanstalk)</li>
                <li>🐳 <strong>Git</strong> / <strong>GitHub</strong></li>
                <li>🔍 <strong>Postman</strong> / <strong>MySQL</strong></li>
            </ul>
            </div>
        </div>
    </section>
  );
};

export default Skills;
