import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_cRxatOSZaci63Yrt5iul66eroaJfyec",
  authDomain: "netflix-clone-dbe46.firebaseapp.com",
  projectId: "netflix-clone-dbe46",
  storageBucket: "netflix-clone-dbe46.appspot.com",
  messagingSenderId: "917981479280",
  appId: "1:917981479280:web:49e64db7a512dc737ecfb5",
  measurementId: "G-DGPEEEDW7W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;
