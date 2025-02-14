// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDULsv00LIpNokVgyRgeJ3DgJL05X4a6as",
  authDomain: "mern-book-store-9a00b.firebaseapp.com",
  projectId: "mern-book-store-9a00b",
  storageBucket: "mern-book-store-9a00b.firebasestorage.app",
  messagingSenderId: "81334022210",
  appId: "1:81334022210:web:533d4aecb4724400befddb",
  measurementId: "G-DDG5QCS9WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;