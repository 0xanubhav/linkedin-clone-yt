import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDPHvRHFxXQLTqScqU8Fvc5aYut-uyFILs",
  authDomain: "linkedin-clone-648ec.firebaseapp.com",
  projectId: "linkedin-clone-648ec",
  storageBucket: "linkedin-clone-648ec.appspot.com",
  messagingSenderId: "504075861093",
  appId: "1:504075861093:web:c8c56ba4981514eb6c9a8c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export  {db ,auth };
