// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVUAOZzWFuVcpHJ2WWQqnGCu0-AfVrs30",
  authDomain: "habit-tracker-cbe6c.firebaseapp.com",
  projectId: "habit-tracker-cbe6c",
  storageBucket: "habit-tracker-cbe6c.appspot.com",
  messagingSenderId: "923407780101",
  appId: "1:923407780101:web:7a075a1dd73161e76c0f6c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

