import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKaAE8YvenlyhNxx0OdGGuZ-L54lD4doQ",
  authDomain: "projeto-mobile-65d6b.firebaseapp.com",
  projectId: "projeto-mobile-65d6b",
  storageBucket: "projeto-mobile-65d6b.firebasestorage.app",
  messagingSenderId: "892823749275",
  appId: "1:892823749275:web:511827700424231fbc7c3e",
  measurementId: "G-HDTM1HMWJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;