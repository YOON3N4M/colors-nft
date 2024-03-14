import { ArrangedColor } from "./color";

export interface UserDocument {
  uid: string;
  displayName: string;
  photoURL: string | null;
  //재화 관련
  lastAutoEarn: string | null;
  lastClickEarn: string | null;
  createdAt: number;
  ownColors: ArrangedColor[];
  tokens: number;
}

export interface ColorDocument extends ArrangedColor {
  purchaseCount: number;
  lastPurchaser: string;
  lastPurchaseAt: number;
}
