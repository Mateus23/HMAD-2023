import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCRMda-n71e9Nwb8tPwt27aqlz9KdAcZUI",
  authDomain: "fir-hmad-2023.firebaseapp.com",
  projectId: "fir-hmad-2023",
  storageBucket: "fir-hmad-2023.appspot.com",
  messagingSenderId: "789283748822",
  appId: "1:789283748822:web:fa0c9f73b2f33985784277",
  measurementId: "G-0Q6W7JRDPR",
  databaseURL: "https://fir-hmad-2023-default-rtdb.firebaseio.com/"
};

console.log('firebase-api')

export const app = initializeApp(firebaseConfig);

console.log('firebase-api2')
export const analytics = getAnalytics(app);

console.log('firebase-api3')
export const database = getDatabase();
console.log('firebase-api4')
