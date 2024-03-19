import { dbService } from "@/firebase";
import { ColorDocument } from "@/types/document";
import { ArrangedColor, Color } from "@/types/color";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";

type EarnType = "auto" | "click";

// * 유저 관련
export async function updateUsersToken(count: number, uid: string) {
  const ref = doc(dbService, "user", uid);
  await updateDoc(ref, {
    tokens: increment(count),
  });
}

export async function updateUserName(newName: string, uid: string) {
  const ref = doc(dbService, "user", uid);
  await updateDoc(ref, {
    displayName: newName,
  });
}

export async function updateUsersLastAutoEarn(uid: string) {
  const ref = doc(dbService, "user", uid);
  await updateDoc(ref, {
    lastAutoEarn: new Date().getTime(),
  });
}

export async function updateUsersLastClickEarn(uid: string) {
  const ref = doc(dbService, "user", uid);
  await updateDoc(ref, {
    lastClickEarn: new Date().getTime(),
  });
}

export async function updateUsersColor(color: ColorDocument, puid: string) {
  const ref = doc(dbService, "user", puid);
  await updateDoc(ref, {
    ownColors: arrayUnion(color),
  });
}

// * 컬러 관련
export async function createColorDocument(
  color: ArrangedColor,
  userPuid: string
) {
  const { numbering } = color;
  const colorDoc: ColorDocument = {
    ...color,
    purchaseCount: 0,
    lastPurchaser: userPuid,
    lastPurchaseAt: new Date().getTime(),
    price: 1,
  };
  const ref = doc(dbService, "color", numbering);
  const res = await setDoc(ref, colorDoc);
  return colorDoc as ColorDocument;
}

export async function getColorDocument(numbering: string) {
  const ref = doc(dbService, "color", numbering);
  const res = await getDoc(ref);

  if (res.exists()) {
    return res.data() as ColorDocument;
  } else {
    return null;
  }
}

export async function handlePurchaseColorDocument(
  uid: string,
  numbering: string
) {
  const ref = doc(dbService, "color", numbering);

  await updateDoc(ref, {
    purchaseCount: increment(1),
    price: increment(1),
    lastPurchaser: uid,
    lastPurchaseAt: new Date().getTime(),
  });
}

export async function getAllColorDocuments() {
  const querySnapshot = await getDocs(collection(dbService, "color"));
  const result: ColorDocument[] = [];
  querySnapshot.forEach((doc) => {
    if (doc.exists()) {
      const data = doc.data() as ColorDocument;
      result.push(data);
    }
  });

  return result;
}
