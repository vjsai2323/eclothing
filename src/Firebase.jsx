// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt6r8zzssii9QRAOMNBRVGaOKub_COf44",
  authDomain: "ecom-26292.firebaseapp.com",
  databaseURL: "https://ecom-26292-default-rtdb.firebaseio.com",
  projectId: "ecom-26292",
  storageBucket: "ecom-26292.firebasestorage.app",
  messagingSenderId: "617879773465",
  appId: "1:617879773465:web:226df4bf628640ba552588",
  measurementId: "G-7TBCWZDNKB"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth & Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// ✅ Export all needed Firebase instances
export { auth, googleProvider, app };
