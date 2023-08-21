// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDioJU2IM23PB_znhYbTa7W6inap0vDizM",
  authDomain: "last-time-9f837.firebaseapp.com",
  projectId: "last-time-9f837",
  storageBucket: "last-time-9f837.appspot.com",
  messagingSenderId: "470136881068",
  appId: "1:470136881068:web:9f1ae22ae741ecdaf70409",
  databaseURL: "https://last-time-9f837-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database
const database = getDatabase(app);