// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "find-mymeds.firebaseapp.com",
  projectId: "find-mymeds",
  storageBucket: "find-mymeds.appspot.com",
  messagingSenderId: "425292931444",
  appId: "1:425292931444:web:1aedaeb940236dc1de8c21",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
