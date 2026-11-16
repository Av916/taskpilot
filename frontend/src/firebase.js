// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 authDomain: "ajentic-ai-d69a5.firebaseapp.com",
  projectId: "ajentic-ai-d69a5",
  storageBucket: "ajentic-ai-d69a5.firebasestorage.app",
  messagingSenderId: "265477993689",
  appId: "1:265477993689:web:46325b49fa68703193fac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

