import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCYfY34O7Z_kkmc1pmzUqSCr_7XRvxG1X0",
    authDomain: "buslivegt.firebaseapp.com",
    databaseURL: "https://buslivegt-default-rtdb.firebaseio.com",
    projectId: "buslivegt",
    storageBucket: "buslivegt.appspot.com",
    messagingSenderId: "1092737901561",
    appId: "1:1092737901561:web:851cba27613e08c1759328",
    measurementId: "G-8S3TDP870E"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);


