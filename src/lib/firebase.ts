import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_kIGJ5aut88mD-mFuKkLx1KXcXjqlYuY",
  authDomain: "my-project-20260107-483600.firebaseapp.com",
  projectId: "my-project-20260107-483600",
  storageBucket: "my-project-20260107-483600.firebasestorage.app",
  messagingSenderId: "706699191408",
  appId: "1:706699191408:web:9bb14f0f2fd630645f80b5",
  measurementId: "G-82JXLFJSRM",
};

// Next.js 핫 리로드 시 중복 초기화 방지
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
