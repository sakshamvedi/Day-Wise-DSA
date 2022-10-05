// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGgGJlf8KnV-oYtH0ACLsL3dGyH0vX708",
  authDomain: "codewars-cce3c.firebaseapp.com",
  projectId: "codewars-cce3c",
  storageBucket: "codewars-cce3c.appspot.com",
  messagingSenderId: "109056917102",
  appId: "1:109056917102:web:b8754e4c18d3d380b6707f",
  measurementId: "G-4GZ705WYB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);