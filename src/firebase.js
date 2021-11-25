//import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
//import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyD05Uiy2Lpo9AiTyGRurchQ0ZoO-G2ZGNI",
  authDomain: "iirisweb.firebaseapp.com",
  projectId: "iirisweb",
  storageBucket: "iirisweb.appspot.com",
  messagingSenderId: "814174106634",
  appId: "1:814174106634:web:4a2cf58f6ede3a52019bf3",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
