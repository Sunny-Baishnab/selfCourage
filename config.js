import firebase from 'firebase';
require('@firebase/firestore');
var firebaseConfig = {
  apiKey: "AIzaSyAJefSw-75teSvAhes1jIauk7FSNmVup5Q",
  authDomain: "selfcourage-36c3e.firebaseapp.com",
  projectId: "selfcourage-36c3e",
  storageBucket: "selfcourage-36c3e.appspot.com",
  messagingSenderId: "860401051087",
  appId: "1:860401051087:web:7314c1cc948cf85b775eba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()