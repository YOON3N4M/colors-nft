import { ArrangedColor } from "./color";

export interface UserDocument {
  uid: string;
  displayName: string;
  photoURL: string | null;
  //재화 관련
  lastAutoEarn: number | null;
  lastClickEarn: number | null;
  createdAt: number;
  ownColors: ArrangedColor[];
  tokens: number;
}

export interface ColorDocument extends ArrangedColor {
  purchaseCount: number;
  lastPurchaser: string;
  lastPurchaseAt: number;
}
