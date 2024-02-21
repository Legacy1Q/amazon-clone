// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOzwwRFj7DzRnC0bwiSsX7ftYrbHugrR4",
  authDomain: "clone-901e0.firebaseapp.com",
  projectId: "clone-901e0",
  storageBucket: "clone-901e0.appspot.com",
  messagingSenderId: "468932523783",
  appId: "1:468932523783:web:3387feec010e60895377a2",
  measurementId: "G-HHCKV3PR8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();
const auth = app.auth();

export { db, auth };