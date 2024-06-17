import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { initializeAuth,  getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyBOA3-xtYPwEkCRaTBR_UU7y6rZXnI6EiU",
  authDomain: "app-movil-acbfa.firebaseapp.com",
  databaseURL: "https://app-movil-acbfa-default-rtdb.firebaseio.com",
  projectId: "app-movil-acbfa",
  storageBucket: "app-movil-acbfa.appspot.com",
  messagingSenderId: "341183990697",
  appId: "1:341183990697:web:6916a8a0e06c0e0d8b52b8",
  measurementId: "G-BSD288Q9XQ"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = initializeAuth(app, {
  
});
const storage = getStorage(app);

export const saveScore = (score: number) => {
  const user = auth.currentUser;
  if (user) {
    const userId = user.uid;
    set(ref(database, 'scores/' + userId), {
      score: score,
      date: new Date().toISOString()
    });
  }
};

export { auth, database, storage }; 



export const db= getDatabase(app)
