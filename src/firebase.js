import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCKgq-Y42aEF53HtmgsXdsjR0rshR9cTdg",
    authDomain: "currency-74d6b.firebaseapp.com",
    projectId: "currency-74d6b",
    storageBucket: "currency-74d6b.appspot.com",
    messagingSenderId: "789698017750",
    appId: "1:789698017750:web:bacf33bf650974b69bcc77"
  };
  

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {auth, googleAuthProvider, facebookAuthProvider};
