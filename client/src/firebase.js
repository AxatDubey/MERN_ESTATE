// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propex-9ecfc.firebaseapp.com",
  projectId: "propex-9ecfc",
  storageBucket: "propex-9ecfc.appspot.com",
  messagingSenderId: "875929995589",
  appId: "1:875929995589:web:46125acf6dce1b02e1562c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 