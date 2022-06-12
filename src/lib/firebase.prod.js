import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyADEBjCJuy8OF9aUQOFQmvmNLs2fwz8EtU",
  authDomain: "movie-x-1c5a6.firebaseapp.com",
  projectId: "movie-x-1c5a6",
  storageBucket: "movie-x-1c5a6.appspot.com",
  messagingSenderId: "100234215493",
  appId: "1:100234215493:web:959cd332774ce6d654a32c",
};
const firebase = Firebase.initializeApp(config);
export const auth = firebase.auth(firebase);
export const provider = new Firebase.auth.FacebookAuthProvider();
export { firebase };
