import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";
import Cookies from "js-cookie";

const ViewCounter = ({ pageKey = "home" }) => {
  const [todayCount, setTodayCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const updateViewCount = async () => {
      try {
        const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date());

        // 1. 브라우저 고유 visitorId (없으면 생성)
        let visitorId = Cookies.get("visitor_id");
        if (!visitorId) {
          visitorId = crypto.randomUUID();
          Cookies.set("visitor_id", visitorId, { expires: 365 });
        }

        // 2. localStorage에서 마지막 방문 날짜 확인
        const lastVisitKey = `lastVisit_${pageKey}_${visitorId}`;
        const lastVisit = localStorage.getItem(lastVisitKey);

        // 오늘 이미 방문했다면 → Firestore 업데이트 안 함
        if (lastVisit === today) {
          console.log("오늘 이미 카운트됨");
          // 현재 DB 값만 읽어서 보여주기
          const docRef = doc(db, "pageViews", pageKey);
          const snap = await getDoc(docRef);
          if (snap.exists()) {
            const data = snap.data();
            setTodayCount(data.todayCount);
            setTotalCount(data.totalCount);
          }
          return;
        }

        // 3. Firestore 업데이트 (오늘 첫 방문일 때만)
        const docRef = doc(db, "pageViews", pageKey);
        const snap = await getDoc(docRef);

        if (!snap.exists()) {
          await setDoc(docRef, {
            date: today,
            todayCount: 1,
            totalCount: 1
          });
          setTodayCount(1);
          setTotalCount(1);
        } else {
          const data = snap.data();
          if (data.date === today) {
            await updateDoc(docRef, {
              todayCount: increment(1),
              totalCount: increment(1)
            });
            setTodayCount(data.todayCount + 1);
            setTotalCount(data.totalCount + 1);
          } else {
            await updateDoc(docRef, {
              date: today,
              todayCount: 1,
              totalCount: increment(1)
            });
            setTodayCount(1);
            setTotalCount(data.totalCount + 1);
          }
        }

        // 4. localStorage에 오늘 날짜 저장 → 중복 방지
        localStorage.setItem(lastVisitKey, today);

      } catch (err) {
        console.error("조회수 업데이트 실패:", err);
      }
    };

    updateViewCount();
  }, [pageKey]);

  return (
    <div className="view-counter">
      <div>👀 Today: {todayCount}</div>
      <div>📈 Total: {totalCount}</div>
    </div>
  );
};

export default ViewCounter;
