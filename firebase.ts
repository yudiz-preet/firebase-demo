// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFwy7iV5xvQbqkSX9t0raDc2dgFmUPTNQ",
  authDomain: "fir-demo-firebase-demo-1.firebaseapp.com",
  projectId: "fir-demo-firebase-demo-1",
  storageBucket: "fir-demo-firebase-demo-1.appspot.com",
  messagingSenderId: "1000080595799",
  appId: "1:1000080595799:web:63bb2496c29989031a3c12",
  measurementId: "G-J32KESXDCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);