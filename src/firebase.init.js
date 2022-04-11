// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzaLd-dzqtiLIYQNeFBI3J8ShiNa5DFeo",
    authDomain: "ema-john-f5cdc.firebaseapp.com",
    projectId: "ema-john-f5cdc",
    storageBucket: "ema-john-f5cdc.appspot.com",
    messagingSenderId: "907683699691",
    appId: "1:907683699691:web:9d2977aa012ca76ebe97ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;