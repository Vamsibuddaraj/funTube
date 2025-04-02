// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "funtube-7d0b5.firebaseapp.com",
  projectId: "funtube-7d0b5",
  storageBucket: "funtube-7d0b5.firebasestorage.app",
  messagingSenderId: "631558317655",
  appId: "1:631558317655:web:d75006ac63745ee5432512",
  measurementId: "G-8TTPZDRFQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 