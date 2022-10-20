import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB5HNqWZ0j1Hgt1hy0gN7WP4K0sXt_W-Yw",
  authDomain: "react-tailwind-twitter.firebaseapp.com",
  projectId: "react-tailwind-twitter",
  storageBucket: "react-tailwind-twitter.appspot.com",
  messagingSenderId: "573172472737",
  appId: "1:573172472737:web:400044d7ab1afefb4b89e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;