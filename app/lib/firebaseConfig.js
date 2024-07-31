import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdAkQBnhXZTOC3JoV37JSulsimXGWvuQU",
  authDomain: "demoproject-6bc6c.firebaseapp.com",
  projectId: "demoproject-6bc6c",
  storageBucket: "demoproject-6bc6c.appspot.com",
  messagingSenderId: "650455572768",
  appId: "1:650455572768:web:0613b718bb3340472d7745",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

export { auth, provider, signInWithPopup };
