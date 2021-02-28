import Firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './config.json';

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
