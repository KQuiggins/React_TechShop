import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAAnBiyLoYHYKQF0aHkk431TvE2DdUAVQA",

	authDomain: "capstone-project-db-81a81.firebaseapp.com",

	projectId: "capstone-project-db-81a81",

	storageBucket: "capstone-project-db-81a81.appspot.com",

	messagingSenderId: "1064228374577",

	appId: "1:1064228374577:web:ff0c28d2ce2fe8dd9aed10",
};

// Initialize Firebase

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {},
) => {
	// doc takes 3 arguments (db, collection, unique id)
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);

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
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => 
onAuthStateChanged(auth, callback);
