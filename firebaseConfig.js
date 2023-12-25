// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2J_tp2iK0pgtXKIA1TAWRAS_v0gr4w_c",
  authDomain: "mediaapp-onaji.firebaseapp.com",
  projectId: "mediaapp-onaji",
  storageBucket: "mediaapp-onaji.appspot.com",
  messagingSenderId: "92221435590",
  appId: "1:92221435590:web:856a1957754c3de6db31c7",
  measurementId: "G-3LMD9DW991",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
