import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDLrBbLixbsTni3VEFgAtLIyrUiaBDUa4",
  authDomain: "insta-clone-3437e.firebaseapp.com",
  projectId: "insta-clone-3437e",
  storageBucket: "insta-clone-3437e.appspot.com",
  messagingSenderId: "552361245974",
  appId: "1:552361245974:web:a6574171d29414e5e1a437",
  measurementId: "G-3M76JJJHHW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };