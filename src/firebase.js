// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTh0dh9M9h-KqGOdPKQ8qMQlUu_3VYwXI",
  authDomain: "my-portfolio-react-app-d4b9b.firebaseapp.com",
  projectId: "my-portfolio-react-app-d4b9b",
  storageBucket: "my-portfolio-react-app-d4b9b.firebasestorage.app",
  messagingSenderId: "686447620587",
  appId: "1:686447620587:web:05d8b6d92fc6251b00a9ae",
  measurementId: "G-9PKKYE46LP"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 인스턴스
export const db = getFirestore(app);