import firebase from 'firebase/app';
import "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyA4St5YY4hIcNvKtrhCz4QpiuYUJ2NdnuM",
  authDomain: "belajar-react-77c96.firebaseapp.com",
  projectId: "belajar-react-77c96",
  storageBucket: "belajar-react-77c96.appspot.com",
  messagingSenderId: "194489901896",
  appId: "1:194489901896:web:b8b8ad83a227a36751c97d",
  measurementId: "G-WQ664CQZGH"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);