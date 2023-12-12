import { initializeApp } from 'firebase/app'
import { orderBy, query, onSnapshot, querySnapshot, getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyCiqcbH1o5h8F2-Gaf1knKQyDlz5iL7AkI",
  
    authDomain: "testing-6209f.firebaseapp.com",
  
    projectId: "testing-6209f",
  
    storageBucket: "testing-6209f.appspot.com",
  
    messagingSenderId: "432255864728",
  
    appId: "1:432255864728:web:ad5162de585c4013c825ed"
  
  };
  
  
  
  initializeApp(firebaseConfig);

  const firestrore = getFirestore();

  const USERS = 'users'

  export {
    firestrore,
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
