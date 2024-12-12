import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCaeMs9SgdeqXH1XHJ9MTwpfCmKJ0Q6350",
  authDomain: "charapp-b27d1.firebaseapp.com",
  projectId: "charapp-b27d1",
  storageBucket: "charapp-b27d1.firebasestorage.app",
  messagingSenderId: "119136761090",
  appId: "1:119136761090:web:049b773a58c563a140be1b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyBCTfYpYYCmm98YA0xk7XiLqeDOk_5i7hM",
//   authDomain: "reactapp-2a018.firebaseapp.com",
//   projectId: "reactapp-2a018",
//   storageBucket: "reactapp-2a018.firebasestorage.app",
//   messagingSenderId: "870906383526",
//   appId: "1:870906383526:web:d0d9feb6efbac6e6913867"
// };

// const app = initializeApp(firebaseConfig);
