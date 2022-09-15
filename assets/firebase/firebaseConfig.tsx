import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEdyiMPploeMSl8EsGxoQAvqeom_xCPYc",
  authDomain: "netflixclone-65f20.firebaseapp.com",
  projectId: "netflixclone-65f20",
  storageBucket: "netflixclone-65f20.appspot.com",
  messagingSenderId: "203323242401",
  appId: "1:203323242401:web:83becd1ca362a9afcbfde0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
