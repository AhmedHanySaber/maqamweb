// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBCAq2h7hFXAYPJMo1dZ0oGzTIgiwKcISg",
  authDomain: "maqamweb-b7853.firebaseapp.com",
  projectId: "maqamweb-b7853",
  storageBucket: "maqamweb-b7853.appspot.com",
  messagingSenderId: "672887230406",
  appId: "1:672887230406:web:9e97e97ff945089959ecc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth }