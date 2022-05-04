import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAscXLsK1CVocFYwR4fdaDffdO4JrmJI1Q",

  authDomain: "netflix-b40fa.firebaseapp.com",

  projectId: "netflix-b40fa",

  storageBucket: "netflix-b40fa.appspot.com",

  messagingSenderId: "903000255150",

  appId: "1:903000255150:web:7cfd5ca62eb8510a041b3f",

  measurementId: "G-B2PQ89YJB1",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
