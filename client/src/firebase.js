// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ameneterh-portfolio.firebaseapp.com",
  projectId: "ameneterh-portfolio",
  storageBucket: "ameneterh-portfolio.appspot.com",
  messagingSenderId: "756247850318",
  appId: "1:756247850318:web:2b8668566179d3d35ac21f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
