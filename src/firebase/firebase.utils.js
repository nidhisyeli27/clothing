import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyALTHkAY5EReJ9_3R5Kd7Cnk08kSJSVCOQ",
    authDomain: "crwn-db-255f1.firebaseapp.com",
    projectId: "crwn-db-255f1",
    storageBucket: "crwn-db-255f1.appspot.com",
    messagingSenderId: "80280243201",
    appId: "1:80280243201:web:0040241b820b7d5a9d0400",
    measurementId: "G-3SP97JV3YK"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;