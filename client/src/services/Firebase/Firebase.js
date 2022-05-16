// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdZp6LmuzudlD4oZV6Oa87i2P2EC-4ibE",
  authDomain: "employeemanagementsystem-96d09.firebaseapp.com",
  projectId: "employeemanagementsystem-96d09",
  storageBucket: "employeemanagementsystem-96d09.appspot.com",
  messagingSenderId: "646820051662",
  appId: "1:646820051662:web:bcd7cd6a5e0cb1ec796e9f",
  measurementId: "G-91LCJ0LN3Q",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
