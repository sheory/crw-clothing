import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAM6UzZ7E5yNkGCLlxZSJ8g7XSPwpELO5Q",
    authDomain: "crown-db-8d1e8.firebaseapp.com",
    projectId: "crown-db-8d1e8",
    storageBucket: "crown-db-8d1e8.appspot.com",
    messagingSenderId: "516610545943",
    appId: "1:516610545943:web:a9e6367b5a411c597fbf52",
    measurementId: "G-4GZ6MGCZVY"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
