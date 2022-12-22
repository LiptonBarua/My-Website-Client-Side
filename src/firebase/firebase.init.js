// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrvVRnDaMKrgf9vNFKTVANxnkQcO-2FTY",
  authDomain: "my-website-339fb.firebaseapp.com",
  projectId: "my-website-339fb",
  storageBucket: "my-website-339fb.appspot.com",
  messagingSenderId: "702637735538",
  appId: "1:702637735538:web:a2f9d232a9ab706f5a8ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;