import { dbService } from "@/firebase";
import { ColorDocument } from "@/types";
import { ArrangedColor } from "@/types/color";
import {
  arrayUnion,
  doc,
  getDoc,
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
  };
  const ref = doc(dbService, "color", numbering);
  const res = await setDoc(ref, colorDoc);
}

export async function getColorDocument(numbering: string) {
  const ref = doc(dbService, "color", numbering);
  const res = await getDoc(ref);

  if (res.exists()) {
    return res.data();
  } else {
    return null;
  }
}
