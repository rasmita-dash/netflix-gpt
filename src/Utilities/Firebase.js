// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ3GRtpqXvuZ0HeR5TjyEQWrT5JHhTwfM",
  authDomain: "netflixgpt-react-32645.firebaseapp.com",
  projectId: "netflixgpt-react-32645",
  storageBucket: "netflixgpt-react-32645.appspot.com",
  messagingSenderId: "952295324181",
  appId: "1:952295324181:web:c76cb24715895bffe2ec1c",
  measurementId: "G-ZTY3TZ071W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();