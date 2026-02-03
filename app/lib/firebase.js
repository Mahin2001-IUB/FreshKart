import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCilLs830mqtnzf9WWBoBwD0XmZ8Trw_48",
  authDomain: "fir-a228d.firebaseapp.com",
  projectId: "fir-a228d",
  storageBucket: "fir-a228d.firebasestorage.app",
  messagingSenderId: "64925871996",
  appId: "1:64925871996:web:f8f7b0cf52acdac5883ef9",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
