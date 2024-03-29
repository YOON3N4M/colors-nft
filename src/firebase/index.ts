import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

interface FirebaseConfig {
  readonly apiKey: string | undefined;
  readonly authDomain: string | undefined;
  readonly projectId: string | undefined;
  readonly storageBucket: string | undefined;
  readonly messagingSenderId: string | undefined;
  readonly appId: string | undefined;
  readonly databaseURL?: string | undefined;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const auth = getAuth(app);
//사진 등
//export const storageService = getStorage()
