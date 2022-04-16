// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7TTL4Z8G5mK_rXldympa3UsmNz1_IaQs",
  authDomain: "deveveloper-me.firebaseapp.com",
  projectId: "deveveloper-me",
  storageBucket: "deveveloper-me.appspot.com",
  messagingSenderId: "684558058854",
  appId: "1:684558058854:web:52c0b2886bd414e3fe74a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;