// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBex0Lmg0b-1fCZ73IKnJ_ILMx-L7WhDhc",
  authDomain: "auth-integration2-6c7f6.firebaseapp.com",
  projectId: "auth-integration2-6c7f6",
  storageBucket: "auth-integration2-6c7f6.firebasestorage.app",
  messagingSenderId: "696059100794",
  appId: "1:696059100794:web:5f8513567f53651815c5c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);