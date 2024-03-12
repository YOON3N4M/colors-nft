import { ArrangedColor } from "./color";

export interface UserDocument {
  uid: string;
  displayName: string;
  photoURL: string | null;
  //재화 관련
  lastEarn: string | null;
  createdAt: string;
  ownColors: ArrangedColor[];
}
