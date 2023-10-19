import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMh__D7QT3FeeGEspXwKqajQihvKVuSn8",
  authDomain: "currency-converter-ef74b.firebaseapp.com",
  projectId: "currency-converter-ef74b",
  storageBucket: "currency-converter-ef74b.appspot.com",
  messagingSenderId: "979250304904",
  appId: "1:979250304904:web:75edaddbe968ea1002cc3d",
  measurementId: "G-PRS9ZZHY36",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
