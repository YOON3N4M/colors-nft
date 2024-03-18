import { auth, dbService } from "@/firebase";
import { UserDocument } from "@/types/document";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

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
  }

  return { status, userData };
}

export async function registerUserDocument(user: User) {
  const { uid, displayName, metadata, photoURL } = user;

  const userDoc: UserDocument = {
    uid,
    displayName: displayName ?? "anonymous",
    createdAt: new Date().getTime(),
    photoURL: photoURL ?? null,
    lastAutoEarn: null,
    lastClickEarn: null,
    ownColors: [],
    tokens: 5,
  };

  const ref = doc(dbService, "user", uid);
  const res = await setDoc(ref, userDoc);

  return userDoc;
}

export async function getUserDocument(uid: string) {
  const ref = doc(dbService, "user", uid);
  const res = await getDoc(ref);

  if (res.exists()) {
    return res.data() as UserDocument;
  } else {
    return null;
  }
}
