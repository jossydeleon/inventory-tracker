import { getApps, initializeApp, FirebaseApp } from "firebase/app";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

let firebaseApp: FirebaseApp | undefined = undefined;

if (!getApps().length) {
  firebaseApp = initializeApp(config);
}

export default firebaseApp;
