import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAEvRoJtnnb5_JXiFzHq3aQodtvyUa_Ves",
    authDomain: "e-commerce-1f578.firebaseapp.com",
    projectId: "e-commerce-1f578",
    storageBucket: "e-commerce-1f578.appspot.com",
    messagingSenderId: "209387118071",
    appId: "1:209387118071:web:6a0a143fb7de59e135e2f2",
    measurementId: "G-09TTSLWFHN"
};

const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default app;
