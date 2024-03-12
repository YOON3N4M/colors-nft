import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export async function googleLogin() {
  const provider = new GoogleAuthProvider();
  let status = null;
  let userData = null;

  try {
    const loginRes = await signInWithPopup(auth, provider);
    status = true;
    userData = loginRes.user;
  } catch {
    status = false;
    userData = {};
  }

  return { status, userData };
}
