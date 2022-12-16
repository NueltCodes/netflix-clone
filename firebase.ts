// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWIXFf7Rl80qKxXXoPKadQ2gzLwkYcnks",
  authDomain: "movie-netflix-clone.firebaseapp.com",
  projectId: "movie-netflix-clone",
  storageBucket: "movie-netflix-clone.appspot.com",
  messagingSenderId: "908462348438",
  appId: "1:908462348438:web:124d4627186e95705f8ab7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
