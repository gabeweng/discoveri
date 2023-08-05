// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSPReE_M_ejlBKPpgRGgB_ipmzZfahvw4",
  authDomain: "discoveri-77a13.firebaseapp.com",
  projectId: "discoveri-77a13",
  storageBucket: "discoveri-77a13.appspot.com",
  messagingSenderId: "928764845166",
  appId: "1:928764845166:web:f51cae09f71ba903545a7f",
  measurementId: "G-MYGGCQ1LEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);