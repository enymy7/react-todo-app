import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA_CXOif2rl9gYhPDwnInpZfpX_8GU_TpE",
  authDomain: "todo-app-cp-401f7.firebaseapp.com",
  projectId: "todo-app-cp-401f7",
  storageBucket: "todo-app-cp-401f7.appspot.com",
  messagingSenderId: "39446994583",
  appId: "1:39446994583:web:89f9a92d2eb7d0bda8d3d2",
  measurementId: "G-QFXM2Z91SP",
});

const db = firebaseApp.firestore();

export default db;
