// 조회수/누적조회수 사용 컴포넌트
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ViewCounter = () => {
  const [todayCount, setTodayCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const todayCookieKey = `viewed_${today}`;
    const todayCountKey = `visitCount_${today}`;
    const totalCountKey = 'totalVisitCount';

    const todayVisited = Cookies.get(todayCookieKey);
    const savedTodayCount = parseInt(localStorage.getItem(todayCountKey) || 0);
    const savedTotalCount = parseInt(localStorage.getItem(totalCountKey) || 0);

    if (!todayVisited) {
      // 오늘 처음 방문한 사용자
      const newTodayCount = savedTodayCount + 1;
      const newTotalCount = savedTotalCount + 1;

      localStorage.setItem(todayCountKey, newTodayCount);
      localStorage.setItem(totalCountKey, newTotalCount);
      Cookies.set(todayCookieKey, 'true', { expires: 1 }); // 1일 동안 유지

      setTodayCount(newTodayCount);
      setTotalCount(newTotalCount);
    } else {
      // 이미 방문한 사용자
      setTodayCount(savedTodayCount);
      setTotalCount(savedTotalCount);
    }
  }, []);

  return (
    <div className="view-counter">
      <div>👀 Today: {todayCount}</div>
      <div>📈 Total: {totalCount}</div>
    </div>
  );
};

export default ViewCounter;
