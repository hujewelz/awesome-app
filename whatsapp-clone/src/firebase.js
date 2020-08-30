import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBb9QxlOhtxkVoMQiwi1sBNaGXDLGU62M",
  authDomain: "whatsapp-clone-a6520.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-a6520.firebaseio.com",
  projectId: "whatsapp-clone-a6520",
  storageBucket: "whatsapp-clone-a6520.appspot.com",
  messagingSenderId: "249661832272",
  appId: "1:249661832272:web:25c198ff0d7b4a86dce555",
  measurementId: "G-7CZ139NMZY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
