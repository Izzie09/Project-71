import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBTSllNv2T_Xqwc63S0nSA7AjLQWV1Xd6w",
    authDomain: "project-71-242cc.firebaseapp.com",
    projectId: "project-71-242cc",
    storageBucket: "project-71-242cc.appspot.com",
    messagingSenderId: "1098747179809",
    appId: "1:1098747179809:web:ebf44f2d2fd59b935b0460"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
