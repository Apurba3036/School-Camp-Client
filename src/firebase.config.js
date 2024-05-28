// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_VITE_PEOJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//  appId: import.meta.env.VITE_APPID


 apiKey: "AIzaSyD_Q-tn_jXWhGB0_HzXXnHnnicayzBbPrQ",
 authDomain: "school-camp-4cbfe.firebaseapp.com",
 projectId: "school-camp-4cbfe",
 storageBucket: "school-camp-4cbfe.appspot.com",
 messagingSenderId: "483845232299",
 appId: "1:483845232299:web:89a82ae9deca96640e09ee",
 measurementId: "G-0QZTNZJ2NW"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;