// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCkp2sjh2iwL3WxCCHu4p6kAIjMpbeKX4",
  authDomain: "well-project-c60fb.firebaseapp.com",
  projectId: "well-project-c60fb",
  storageBucket: "well-project-c60fb.appspot.com",
  messagingSenderId: "412327144141",
  appId: "1:412327144141:web:804481a402845f8387d784",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
