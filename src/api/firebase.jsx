import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAecY5EpcaienIwoMbLeWukmyUC2H3NCtw",
  authDomain: "matps-4d340.firebaseapp.com",
  projectId: "matps-4d340",
  storageBucket: "matps-4d340.appspot.com",
  messagingSenderId: "13372849447",
  appId: "1:13372849447:web:521aae3cc394d5a68ffd02",
  measurementId: "G-46363F3077"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();