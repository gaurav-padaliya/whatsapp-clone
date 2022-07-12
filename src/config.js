// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
// import { getFirestore } from "firebase/firestore/lite";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAy48Hp3WSLIDSnJ4mIdxrzAJxxxcSgFQY",
  authDomain: "whatsapp-clone-1bfe2.firebaseapp.com",
  projectId: "whatsapp-clone-1bfe2",
  storageBucket: "whatsapp-clone-1bfe2.appspot.com",
  messagingSenderId: "109442000216",
  appId: "1:109442000216:web:74d78343398994f22a712d",
  measurementId: "G-9WGXE3TYYX"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);
  // const db = app.firestore();

  export default db;
