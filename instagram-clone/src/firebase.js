import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3zX2LZYG7HhI1n6jjGcUE645uNhTCA-c",
  authDomain: "instagram-clone-97956.firebaseapp.com",
  databaseURL: "https://instagram-clone-97956.firebaseio.com",
  projectId: "instagram-clone-97956",
  storageBucket: "instagram-clone-97956.appspot.com",
  messagingSenderId: "662659974683",
  appId: "1:662659974683:web:183157b705aa9dc79bdabe",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Authentication
export const auth = firebase.auth();
// Cloud Firestore
export const db = firebase.firestore();
// Storage
export const storage = firebase.storage();

// Sign in with Google
// auth.signInWithPopup(provider)
export const provider = new firebase.auth.GoogleAuthProvider();

export const FieldValue = firebase.firestore.FieldValue;
