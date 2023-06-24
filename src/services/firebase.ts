// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsXv5Q-JFEBBgeLvR78Vez4WcUTqFikB8",
  authDomain: "task-board-d7d30.firebaseapp.com",
  projectId: "task-board-d7d30",
  storageBucket: "task-board-d7d30.appspot.com",
  messagingSenderId: "606658307558",
  appId: "1:606658307558:web:299d63827d50ecdc256227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database }