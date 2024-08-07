import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArFUtVTtimCSybOePHIhncUnT1zj3xz2g",
  authDomain: "interior-design-website-2b75e.firebaseapp.com",
  projectId: "interior-design-website-2b75e",
  storageBucket: "interior-design-website-2b75e.appspot.com",
  messagingSenderId: "416874068727",
  appId: "1:416874068727:web:b9733473296075d52671f2",
  measurementId: "G-XZYDJCZR37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
