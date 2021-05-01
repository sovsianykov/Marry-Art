import  firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';





const firebaseConfig = {
    apiKey: "AIzaSyDyS99j4Pl0qfeuGd5QPvoF9t_v2EhYy0o",
    authDomain: "marry-art.firebaseapp.com",
    projectId: "marry-art",
    storageBucket: "marry-art.appspot.com",
    messagingSenderId: "308039254730",
    appId: "1:308039254730:web:0004a0b736a22671f36a33"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 export const projectStorage = firebase.storage();
 export const projectFirestore = firebase.firestore();


