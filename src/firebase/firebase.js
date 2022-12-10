// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4B9LaJfAqPQMztw3rdYwnKC3oVTT9gwI",
  authDomain: "website-menu-345f9.firebaseapp.com",
  projectId: "website-menu-345f9",
  storageBucket: "website-menu-345f9.appspot.com",
  messagingSenderId: "260022641941",
  appId: "1:260022641941:web:edd10e22516e48536b751c",
  measurementId: "G-KS2N6LRQP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const collectionCategory = collection(db , 'Categorys')
const collectionProducts = collection(db , 'products')

export {collectionCategory , collectionProducts};