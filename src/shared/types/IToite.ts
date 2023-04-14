import { Timestamp } from "firebase/firestore";

export default interface IToite {
  mensagem: string;
  autor: string;
  id: string;
  timestamp: Timestamp;
}