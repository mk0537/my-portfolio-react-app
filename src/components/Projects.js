import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,           // 하단 점 네비게이션
    infinite: true,       // 무한 루프
    speed: 500,
    slidesToShow: 1,      // 한 번에 하나씩 보여줌
    slidesToScroll: 1,
    arrows: true          // 좌우 화살표
  };

  return (
    <section className="Project" id="projects">
      <h2 className="Project-title">📂 Projects</h2>

        {/* 개인 프로젝트 */}
        <div className="Project-slide">
          <h3 className="Project-category">👤 개인 프로젝트</h3>
          <div className="Project-row">
            <div className="Project-container">
              <h3 className="Project-subtitle">🐶 같이 산책해요</h3>
              <small style={{ color: "grey" }}>
                (2026.07.06 ~ 진행중)
              </small>

              <p className="Project-content">
                Spring Boot + React 기반 <span className="highlight">반려동물 산책 매칭</span> 서비스입니다. <br />
                <strong>지역, 시간, 견종 등의 조건을 통해 함께 산책할 반려인을 모집하고</strong>,
                <span className="highlight">실시간 채팅</span>으로 약속을 잡을 수 있는 웹서비스입니다.
              </p>

              <ul className="Project-ul">
                <li>JWT 기반 회원가입 / 로그인 및 권한 관리</li>
                <li>산책 모집 게시글 CRUD 및 지역 · 날짜 · 견종 검색</li>
                <li>참여 신청 및 모집 상태(모집중 / 모집완료) 관리</li>
                <li>반려견 프로필(견종, 나이, 성별, 성격) 등록</li>
                <li>WebSocket(STOMP)를 활용한 1:1 실시간 채팅</li>
                <li>AWS S3 이미지 업로드 및 EC2 배포</li>
              </ul>
            </div>

            <a
              href="#"
              className="Preview-card"
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop : "20px"
              }}
            >
              <img
                src="/"
                alt="미리보기"
                className="Preview-img"
              />
              <div className="Preview-title">my-petService-project</div>
              <div className="Preview-overlay danger">
                <div className="Overlay-title">⚠️ 개발진행중</div>
                {/* <div className="Overlay-description">
                  🚧 현재 AWS 계정 문제로 인해 배포된 페이지 접속 시 404 오류가 발생하고 있습니다.
                  원인 분석을 완료하였으며, 계정 복구 및 배포 환경 재설정을 통해 해결 작업을 진행 중입니다.
                </div> */}
              </div>
            </a>
          </div>
        </div>

        {/* 팀 프로젝트 - 1 */}
          <div className="Project-slide">
          <h3 className="Project-category">🤝 팀 프로젝트 - 1</h3>
          <div className="Project-row">
            <div className="Project-container">
              <h3 className="Project-subtitle">🎉 전국 축제 정보 웹페이지 </h3> <small style={{color : "grey"}}>(2025.08.11 ~ 2025.09.11)</small> 
                <p className="Project-content">
                  <span className="highlight">공공데이터포털 API</span>를 활용하여 전국 축제 정보를 제공하는 <br />
                   서비스를 개발하였습니다. <br />
                  <span className="highlight">메인페이지, 좋아요 기능, 축제 검색, 반응형 UI 등</span>을 구현했으며, 
                  <span className="highlight"> DB 설계 및 API 연동</span>을 직접 담당했습니다.
                </p>
                <ul className="Project-ul">
                  <li>Spring Boot 기반 백엔드 (축제 DB 관리, API 제공) </li>
                  <li>React 기반 UI (목록·상세, 반응형 디자인)</li>
                  <li>메인 페이지 제작</li>
                  <li>공공데이터포털 API 연동</li>
                  <li>좋아요(찜하기) 기능 / 축제 검색 기능</li>
                </ul>
            </div>

            <a
              href="https://mk0537.github.io/festival-portfolio-react-app-/"
              className="Preview-card developing"
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop : "40px"
              }}
            >
              <img
                src="/my-portfolio-react-app/festivalWeb.png"
                alt="전국 축제 웹서비스 미리보기"
                className="Preview-img"
              />
              <div className="Preview-title">Festival_web_project</div>
            </a>
          </div>
          </div>
     
        {/* 팀 프로젝트 - 2  */}
        <div className="Project-slide">
          <h3 className="Project-category">🤝 팀 프로젝트 - 2</h3>
          <div className="Project-row">
            <div className="Project-container">
              <h3 className="Project-subtitle">📚 북 카페 서비스</h3> <small style={{color : "grey"}}>(2025.07.11 ~ ing)</small>
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

            <a
              href="#"
              className="Preview-card developing"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.preventDefault()}
              style={{
                marginTop : "20px"
              }}
            >
              <img
                src="/my-portfolio-react-app/bookcafe.png"
                alt="찜 도서 미리보기"
                className="Preview-img"
              />
              <div className="Preview-title">book-cafe-project</div>
              <div className="Preview-overlay danger">
                <div className="Overlay-title">⚠️ 문제점 발생</div>
                <div className="Overlay-description">
                 프로젝트 진행 중 일정 조율에 어려움이 있어 잠시 중단되었으나,  
                  이를 통해 협업과 커뮤니케이션의 중요성을 배우게 되었습니다.  
                  현재는 개인적으로 보완 작업을 진행 중입니다.
                </div>
              </div>
            </a>
            </div>
            </div>
    </section>
  );
};

export default Projects;