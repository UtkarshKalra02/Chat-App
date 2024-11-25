// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8I3eIsrsGCKx70uUcJJpAuireJNPhJIY",
  authDomain: "chat-app-945ba.firebaseapp.com",
  projectId: "chat-app-945ba",
  storageBucket: "chat-app-945ba.firebasestorage.app",
  messagingSenderId: "628239937549",
  appId: "1:628239937549:web:d64a459e7b224cd0a66544",
  measurementId: "G-NV0FKP39MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);