import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

import "./css/styles.css";


function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <div className="App-content">
          <div className="App-top">
            <img
              src="/my-portfolio-react-app/profileImage.png"
              alt="profileImage"
              className="profileImage-img"
            />
            <h1 className="App-title">👩‍💻 Kim Minkyung</h1>
          </div>
          <div className='App-p'>
            <p className="App-subtitle">Fullstack Developer | Java & React</p>
            <p className="App-subtitle"><strong>“협업에 강한 개발자가 되겠습니다.”</strong></p>
          </div>
          <div className="App-tags">
            <span># Back-End </span>
            <span># Front-End </span>
            <span># Spring Boot </span>
            <span># React </span>
          </div>
          <div className="App-links">
            <a href="https://github.com/mk0537" target="_blank" rel="noreferrer">
              💻 GitHub
            </a>
            <a href="#contact">📬 Contact</a>
          </div>
        </div>
      </header>

      <main className="main">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        ⓒ 2025 Kim Minkyung. All rights reserved.
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;

