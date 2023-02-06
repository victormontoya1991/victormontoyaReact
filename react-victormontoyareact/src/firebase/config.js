// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPPFDXgn8_inJpJLe2H0yfb9IsIBxxuUA",
    authDomain: "victor-montoya-rj.firebaseapp.com",
    projectId: "victor-montoya-rj",
    storageBucket: "victor-montoya-rj.appspot.com",
    messagingSenderId: "979396826508",
    appId: "1:979396826508:web:e621eab6da4309c73472a9",
    measurementId: "G-0P7EPZ4HZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);