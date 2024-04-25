import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD9YClR2j_nu3mcsqYqnyujV5xRSLpwrhw",
    authDomain: "create-form-22741.firebaseapp.com",
    projectId: "create-form-22741",
    storageBucket: "create-form-22741.appspot.com",
    messagingSenderId: "624767037131",
    appId: "1:624767037131:web:a4c321d92b9b14da55754e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,storage,auth,provider}