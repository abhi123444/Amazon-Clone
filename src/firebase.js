
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4RqRyxNHTdf1E3nT5sONUDjRBLSggV_A",
  authDomain: "clone-e5c97.firebaseapp.com",
  projectId: "clone-e5c97",
  storageBucket: "clone-e5c97.appspot.com",
  messagingSenderId: "939080764538",
  appId: "1:939080764538:web:1d498c5c8f9285e967ffc3"
};
  
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  export var auth = firebase.auth();
  export default db; 