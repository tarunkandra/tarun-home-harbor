// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const api_key="AIzaSyCNH4D7QtDHqUcduELOB0E6XVs1tqKjFCU"
const firebaseConfig = {
  apiKey: api_key,
  authDomain: "mern-estate-9b809.firebaseapp.com",
  projectId: "mern-estate-9b809",
  storageBucket: "mern-estate-9b809.appspot.com",
  messagingSenderId: "711065069772",
  appId: "1:711065069772:web:10f2d4463788ddc865fa69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);