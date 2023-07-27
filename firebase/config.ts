// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCR0cVIgAAx90PniKfAYO3ECzYGwbK9Qak',
  authDomain: 'elearning-393409.firebaseapp.com',
  projectId: 'elearning-393409',
  storageBucket: 'elearning-393409.appspot.com',
  messagingSenderId: '625815972027',
  appId: '1:625815972027:web:21191ffc660d993ab4e19e',
  measurementId: 'G-80P7771P3S',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// initalize firestore
export const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
