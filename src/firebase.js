import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDBQefTW_dOQFUabHb83odkiizNHpZK5_s",
  authDomain: "disneyplus-clone-3af42.firebaseapp.com",
  projectId: "disneyplus-clone-3af42",
  storageBucket: "disneyplus-clone-3af42.appspot.com",
  messagingSenderId: "195115613599",
  appId: "1:195115613599:web:76b7896681e9e6ec3dd1aa",
  measurementId: "G-E00M669DHK",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that instance
}

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, db };
export default firebase;
