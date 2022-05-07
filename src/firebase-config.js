import { initializeApp } from 'firebase/app';

import { initializeFirestore } from 'firebase/firestore';

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

export const db = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
});
