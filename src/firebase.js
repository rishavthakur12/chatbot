// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADWnjrBybqExPMxhgJM1u5u2IEk8wH2yI",
  authDomain: "chit-chat-f7f26.firebaseapp.com",
  projectId: "chit-chat-f7f26",
  storageBucket: "chit-chat-f7f26.appspot.com",
  messagingSenderId: "846773171490",
  appId: "1:846773171490:web:bdc6c2d2ee5dc27399217b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
