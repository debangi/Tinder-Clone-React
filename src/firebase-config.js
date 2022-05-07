import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAO48Snfhxj7b1OknJSaQOxwZdMpfY1v4I',
  authDomain: 'tinder-clone-151ea.firebaseapp.com',
  projectId: 'tinder-clone-151ea',
  storageBucket: 'tinder-clone-151ea.appspot.com',
  messagingSenderId: '196636117405',
  appId: '1:196636117405:web:fd465a1cfbc1830bd4c774',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
