import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuW7iS3z2Gitk4XNIoL7b1HtcfdBlpgPc",
  authDomain: "spotify-8d125.firebaseapp.com",
  projectId: "spotify-8d125",
  storageBucket: "spotify-8d125.appspot.com",
  messagingSenderId: "830985506521",
  appId: "1:830985506521:web:abf47cdaa77747c765f8c8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
