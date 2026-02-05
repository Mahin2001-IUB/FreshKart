
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // 🔥 Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCilLs830mqtnzf9WWBoBwD0XmZ8Trw_48",
//   authDomain: "fir-a228d.firebaseapp.com",
//   projectId: "fir-a228d",
//   storageBucket: "fir-a228d.appspot.com", // ✅ fixed domain
//   messagingSenderId: "64925871996",
//   appId: "1:64925871996:web:f8f7b0cf52acdac5883ef9",
// };

// // ✅ Prevent Firebase from initializing multiple times
// const app = getApps().length === 0
//   ? initializeApp(firebaseConfig)
//   : getApp();

// // 🔐 Firebase Auth
// export const auth = getAuth(app);

// export default app;
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 🔥 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCilLs830mqtnzf9WWBoBwD0XmZ8Trw_48",
  authDomain: "fir-a228d.firebaseapp.com",
  projectId: "fir-a228d",
  storageBucket: "fir-a228d.appspot.com",
  messagingSenderId: "64925871996",
  appId: "1:64925871996:web:f8f7b0cf52acdac5883ef9",
};

// ✅ Initialize Firebase only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// 🔐 Firebase Authentication
export const auth = getAuth(app);

export default app;

