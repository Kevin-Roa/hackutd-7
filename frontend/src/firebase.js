import Firebase from 'firebase';
import { ref, onMounted } from 'vue';
import { firebaseConfig } from './config.json';

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
