import { ArrangedColor } from "./color";

export interface UserDocument {
  uid: string;
  displayName: string;
  photoURL: string | null;
  //재화 관련
  lastEarn: string | null;
  createdAt: number;
  ownColors: ArrangedColor[];
  autoEarnToken: number;
  clickEarnToken: number;
}
