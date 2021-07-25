import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBb9Fk9LzhAXzbId0tz3BJfuoDJFAEWpEY',
  authDomain: 'products-list-app-b136e.firebaseapp.com',
  projectId: 'products-list-app-b136e',
  storageBucket: 'products-list-app-b136e.appspot.com',
  messagingSenderId: '256270810645',
  appId: '1:256270810645:web:4dfd06f5db6b6d374f981c',
  measurementId: 'G-KK0BD43XJ8',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
