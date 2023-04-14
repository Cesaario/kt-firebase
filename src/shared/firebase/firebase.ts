import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvROOIFRgS24dGXty0KMoIUkkTod2MoJk",
  authDomain: "kt-firebase-cd6a5.firebaseapp.com",
  projectId: "kt-firebase-cd6a5",
  storageBucket: "kt-firebase-cd6a5.appspot.com",
  messagingSenderId: "793753617590",
  appId: "1:793753617590:web:c60a9850fb487af8fb9217"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);