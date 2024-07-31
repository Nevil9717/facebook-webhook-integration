import { auth, provider, signInWithPopup } from "./firebaseConfig";

const loginWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("🚀 ~ file: auth.js:6 ~ loginWithFacebook ~ result:", result);
    const user = result.user;
    console.log("🚀 ~ file: auth.js:8 ~ loginWithFacebook ~ user:", user);
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export { loginWithFacebook };
