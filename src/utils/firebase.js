// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA0PIPKbB8YTHYzHMWGVLE1lIolMVl2ZM",
  authDomain: "netflix-ai-47923.firebaseapp.com",
  projectId: "netflix-ai-47923",
  storageBucket: "netflix-ai-47923.appspot.com",
  messagingSenderId: "771905784383",
  appId: "1:771905784383:web:f0929f62fc3e56870e068a",
  measurementId: "G-BCC2XWJBEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);