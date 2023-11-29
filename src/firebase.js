import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD8VzlkdxmVJ0etZ_VkLZoeRekkcP7Q8M4",
  authDomain: "wardlin-chat.firebaseapp.com",
  projectId: "wardlin-chat",
  storageBucket: "wardlin-chat.appspot.com",
  messagingSenderId: "793856958991",
  appId: "1:793856958991:web:655de8e6f69b05042bf97a",
  measurementId: "G-3GSELNVX1W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
