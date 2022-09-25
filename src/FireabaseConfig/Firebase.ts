// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASJ0DJhIEKz0B9DW5igpLbxsIlVFVqW8Y",
  authDomain: "connectxlite.firebaseapp.com",
  projectId: "connectxlite",
  storageBucket: "connectxlite.appspot.com",
  messagingSenderId: "618669458892",
  appId: "1:618669458892:web:7574d7a0aa61246af64969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()