// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSRh_4509dNE3B1BjXDUSNuXYN9qONUAI",
  authDomain: "astrox-technologies.firebaseapp.com",
  projectId: "astrox-technologies",
  storageBucket: "astrox-technologies.firebasestorage.app",
  messagingSenderId: "834198755171",
  appId: "1:834198755171:web:ecc550e0314f432cf9a556",
  measurementId: "G-KEG9J2FVQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
