import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA4St5YY4hIcNvKtrhCz4QpiuYUJ2NdnuM",
  authDomain: "belajar-react-77c96.firebaseapp.com",
  databaseURL: "https://belajar-react-77c96-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajar-react-77c96",
  storageBucket: "belajar-react-77c96.appspot.com",
  messagingSenderId: "194489901896",
  appId: "1:194489901896:web:b8b8ad83a227a36751c97d",
  measurementId: "G-WQ664CQZGH"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();