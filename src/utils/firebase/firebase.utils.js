import { initializeApp } from 'firebase/app';
import { 
    getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider, 
     
    } from 'firebase/auth';

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc } 
  from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAAnBiyLoYHYKQF0aHkk431TvE2DdUAVQA",
  
    authDomain: "capstone-project-db-81a81.firebaseapp.com",
  
    projectId: "capstone-project-db-81a81",
  
    storageBucket: "capstone-project-db-81a81.appspot.com",
  
    messagingSenderId: "1064228374577",
  
    appId: "1:1064228374577:web:ff0c28d2ce2fe8dd9aed10"
  
  };
  
  
  // Initialize Firebase
  
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ 
  prompt: 'select_account' 
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // doc takes 3 arguments (db, collection, unique id)
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userDocSnap = await getDoc(userDocRef);
  console.log(userDocSnap);
  console.log(userDocSnap.exists());

  // if user doesn't exist in db, create a new user/set document from userAuth in my document

  if (!userDocSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {};