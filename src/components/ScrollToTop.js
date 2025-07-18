// src/components/ScrollToTop.js
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // 스크롤 감지해서 버튼 보이기
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); // 200px 넘으면 보여짐
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="ScrollToTop-btn" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
