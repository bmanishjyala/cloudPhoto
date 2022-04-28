// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ1NPZD1zKaon5kBi5b1RJezzRG3Wz8x8",
  authDomain: "manistagram-dc441.firebaseapp.com",
  projectId: "manistagram-dc441",
  storageBucket: "manistagram-dc441.appspot.com",
  messagingSenderId: "659746812166",
  appId: "1:659746812166:web:2bbb42fff18c16ab552e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const projectStorage = getStorage(app);


export {app,db,projectStorage};