import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCav2-2wthS75qjNhLNVesOpNecNhP5_3U",
  authDomain: "react-blog-admin-24185.firebaseapp.com",
  projectId: "react-blog-admin-24185",
  storageBucket: "react-blog-admin-24185.appspot.com",
  messagingSenderId: "326515515857",
  appId: "1:326515515857:web:caca91db4e2b0f77c600f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth, db };
