import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyCNS070QuKRrxDFBevfRsRFcW26SzDhgtw",
    authDomain: "nx-apparel.firebaseapp.com",
    projectId: "nx-apparel",
    storageBucket: "nx-apparel.appspot.com",
    messagingSenderId: "69786473287",
    appId: "1:69786473287:web:e7746f1f90655a215fb262",
    measurementId: "G-XVK0Z1ZT3L"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get();

      if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
              await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
              
          } catch (error) {
              console.log('error creating user ', error.message);
              
          }
      }

      return userRef;
      
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //GOOGLE Authentication utility

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase; 