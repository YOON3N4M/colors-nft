import { useAuthActions, useUser } from "@/store/authStore";
import { ArrangedColor } from "@/types/color";
import { UserDocument } from "@/types/document";
import { calculateTimeDiffer } from "@/utils";
import { getUserDocument } from "@/utils/auth";
import {
  createColorDocument,
  getColorDocument,
  handlePurchaseColorDocument,
  updateUsersColor,
  updateUsersToken,
} from "@/utils/firebaseApi";
import React from "react";

export default function useColorPurchase() {
  const { setUser } = useAuthActions();

  async function purchaseColor(uid: string, color: ArrangedColor) {
    const { numbering } = color;

    const freshUserDocument = (await getUserDocument(uid)) as UserDocument;
    setUser(freshUserDocument);
    let existColorDocument = await getColorDocument(numbering);

    if (!existColorDocument) {
      existColorDocument = await createColorDocument(color, uid);
    } else {
      const timeDiffer = calculateTimeDiffer(existColorDocument.lastPurchaseAt);

      const checkTimeDiffer = timeDiffer > 600;
      const checkTokens = freshUserDocument.tokens >= existColorDocument.price;

      if (!checkTimeDiffer) {
        confirm("can't buy this color now");
        return;
      }
      if (!checkTokens) {
        confirm("not enough tokens");
        return;
      }
    }
    await updateUsersToken(-existColorDocument.price, uid);
    //console.log("토큰업데이트 완료");
    await updateUsersColor(existColorDocument, uid);
    // console.log("유저 업데이트 완료");
    await handlePurchaseColorDocument(uid, numbering);
    // console.log("구매동장시 컬러 문서 수정완료");
  }

  return { purchaseColor };
}
