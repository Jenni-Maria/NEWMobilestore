import { initializeApp } from 'firebase/app'
import { orderBy, query, onSnapshot, querySnapshot, getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; 

const firebaseConfig = {

  apiKey: "AIzaSyCd0X7k_PJ1q68HrpYYo3tSK6Mevz10B9A", 
  authDomain: "mobilestoreapp-1d399.firebaseapp.com", 
  projectId: "mobilestoreapp-1d399", 
  storageBucket: "mobilestoreapp-1d399.appspot.com", 
  messagingSenderId: "539103490035", 
  appId: "1:539103490035:web:5a31df957982e314f0ac86" 
  }; 
  
  initializeApp(firebaseConfig);

  const firestrore = getFirestore();
  const firebaseApp = initializeApp(firebaseConfig); 
  const USERS = 'users';
  const auth = getAuth(firebaseApp); 

  export {
    firebaseApp,
    firestrore,
    auth,
    signInWithEmailAndPassword,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    querySnapshot,
    orderBy,
    USERS
  };

  console.log("Firebase toimii")
