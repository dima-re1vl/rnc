import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZxgggBhhLQBthoePU9BAXFbMYCVl83dE",
  authDomain: "rncproductsmain.firebaseapp.com",
  projectId: "rncproductsmain",
  storageBucket: "rncproductsmain.appspot.com",
  messagingSenderId: "378919372858",
  appId: "1:378919372858:web:ff5063531200790fac4d03"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
