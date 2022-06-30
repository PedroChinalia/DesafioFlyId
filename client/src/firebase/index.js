import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD426EXy5kCosOwcsh-yFAvMMrizlLfI3M",
  authDomain: "desafioflyid.firebaseapp.com",
  projectId: "desafioflyid",
  storageBucket: "desafioflyid.appspot.com",
  messagingSenderId: "531104267039",
  appId: "1:531104267039:web:0dea4a1b98713e52300e2a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);