// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQOuChfSeD8qQjL7dDldqyiI16qg_1sBw",
  authDomain: "react-app-bf55a.firebaseapp.com",
  projectId: "react-app-bf55a",
  storageBucket: "react-app-bf55a.appspot.com",
  messagingSenderId: "678275866033",
  appId: "1:678275866033:web:3ea90c1a9f743fd9f3b190",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
