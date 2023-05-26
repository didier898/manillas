import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBOwEYdsIb9829fKzUAxXeErxnQCD_xA1Q",
    authDomain: "software-manillas.firebaseapp.com",
    databaseURL: "https://software-manillas-default-rtdb.firebaseio.com",
    projectId: "software-manillas",
    storageBucket: "software-manillas.appspot.com",
    messagingSenderId: "557447077671",
    appId: "1:557447077671:web:9143804a3107527e78d302"
  };


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default db;