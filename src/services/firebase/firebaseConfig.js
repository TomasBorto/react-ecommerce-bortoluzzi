// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT4lL_ogh9xxoK0ABDxwl-w2XhdxwTlJw",
  authDomain: "coder-6e7ba.firebaseapp.com",
  projectId: "coder-6e7ba",
  storageBucket: "coder-6e7ba.appspot.com",
  messagingSenderId: "568347737112",
  appId: "1:568347737112:web:6ef2a7b3dc21d236eb576d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)