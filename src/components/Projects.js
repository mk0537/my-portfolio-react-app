const Projects = () => {
  return (
    <section className="Project" id="projects">
      <h2 className="Project-title">📂 Projects</h2>

      {/* 👤 개인 프로젝트 */}
      <h3 className="Project-category">👤 개인 프로젝트</h3>
      <div className="Project-row">
        {/* 설명 */}
        <div className="Project-container">
          <h3 className="Project-subtitle">📝 나만의 게시판</h3>
          <p className="Project-content">
            Spring Boot + React 기반 <span className="highlight">JWT 인증 게시판</span> 서비스입니다. <br />
            <strong>로그인 / 회원가입, 게시글, 댓글, 좋아요</strong> 기능을 포함하며 <span className="highlight">AWS 배포</span>까지 경험하였습니다.
          </p>
          <ul className="Project-ul">
            <li>JWT 인증 회원가입/로그인 + 임시 비밀번호 재설정</li>
            <li>게시판 CRUD + Toast UI 이미지 업로드</li>
            <li>댓글, 좋아요, 마이페이지</li>
            <li>회원 정보 수정, ID, 비밀번호 찾기</li>
            <li>AWS EC2, RDS, EB 활용 배포 및 로그 분석</li>
          </ul>
        </div>

        {/* 미리보기 */}
        <a
          href="http://my-login-frontend-bucket.s3-website.ap-northeast-2.amazonaws.com"
          className="Preview-card"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/my-portfolio-react-app/myboard.png"
            alt="나만의 게시판 미리보기"
            className="Preview-img"
          />
          <div className="Preview-title">my-login-project</div>
        </a>
      </div>

      {/* 🤝 팀 프로젝트 */}
      <h3 className="Project-category">🤝 팀 프로젝트</h3>
      <div className="Project-row">
        {/* 설명 */}
        <div className="Project-container">
          <h3 className="Project-subtitle">📚 북 카페 서비스</h3>
          <p className="Project-content">
            <span className="highlight">도서 API와 JWT 인증</span>을 활용한 도서 찜 서비스입니다. <br />
            팀원들과 협업하여 <span className="highlight">외부 API 연동 도서 검색, 찜 목록, 메인페이지 UI</span> 및 <span className="highlight">DB 설계, 배포</span>를 담당했습니다.
          </p>
          <ul className="Project-ul">
            <li>React 기반 메인페이지 UI / 찜하기 기능</li>
            <li>Naver Book API 연동 후 DB 저장</li>
            <li>Naver Book API 연동 후 도서 검색</li>
            <li>Spring Boot 기반 백엔드 (찜, 도서 랜덤 조회)</li>
            <li>AWS EC2, RDS 활용한 배포 경험</li>
          </ul>
        </div>

        {/* 미리보기 */}
        <a
          href="#"
          className="Preview-card developing"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.preventDefault()} // 링크 비활성화
        >
          <img
            src="/my-portfolio-react-app/bookcafe.png"
            alt="찜 도서 미리보기"
            className="Preview-img"
          />
          <div className="Preview-title">book-cafe-project</div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
