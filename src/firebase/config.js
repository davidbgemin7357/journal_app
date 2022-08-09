// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqKQjCSRKBJ7vVO45iUtCwG3NcRNjhudA",
    authDomain: "react-course-1f04a.firebaseapp.com",
    projectId: "react-course-1f04a",
    storageBucket: "react-course-1f04a.appspot.com",
    messagingSenderId: "1015500221708",
    appId: "1:1015500221708:web:2e423c597647e774a56d29",
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );