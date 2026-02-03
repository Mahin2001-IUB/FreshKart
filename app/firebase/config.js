// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCilLs830mqtnzf9WWBoBwD0XmZ8Trw_48",
  authDomain: "fir-a228d.firebaseapp.com",
  projectId: "fir-a228d",
  storageBucket: "fir-a228d.firebasestorage.app",
  messagingSenderId: "64925871996",
  appId: "1:64925871996:web:f8f7b0cf52acdac5883ef9",
  measurementId: "G-NJDQJX7098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);