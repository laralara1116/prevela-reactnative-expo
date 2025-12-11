// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnzKe-9JrlZYJIw6jxoiim11ZOVBGBoK8",
  authDomain: "prevela-b1156.firebaseapp.com",
  projectId: "prevela-b1156",
  storageBucket: "prevela-b1156.firebasestorage.app",
  messagingSenderId: "1093686744050",
  appId: "1:1093686744050:web:0ad10346dea22649bc116b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };