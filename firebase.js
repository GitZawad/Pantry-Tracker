// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiORuV_eqc7OpwtoLNJxUTG8lXOgqZ3R0",
  authDomain: "pantry-tracker-b63b4.firebaseapp.com",
  projectId: "pantry-tracker-b63b4",
  storageBucket: "pantry-tracker-b63b4.appspot.com",
  messagingSenderId: "222374964343",
  appId: "1:222374964343:web:e21ea7c425f8a66c172a72",
  measurementId: "G-1LMS9V8Q2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}