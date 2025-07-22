const Contact = () => {
  return (
    <section className="Contact" id="contact">
      <h2 className="Contact-title">📮 Contact</h2>

      <div className="Contact-container">
        <p>
          📧 Email:&nbsp;
          <a href="mailto:mk0537@naver.com" className="Contact-link">
            mk0537@naver.com
          </a>
        </p>

        <p>
          💻 GitHub:&nbsp;
          <a
            href="https://github.com/mk0537"
            className="Contact-link"
            target="_blank"
            rel="noreferrer"
          >
           github.com/mk0537
          </a>
        </p>

        <p>
          📄 Resume:&nbsp;
          <a
            href="/my-portfolio-react-app/resume.pdf"
            className="Contact-link"
            download
          >
            이력서 다운로드 (PDF)
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
