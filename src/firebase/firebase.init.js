import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzPhfNpO4IlC4ha2CI_p0Q9pYC-jguU-s",
    authDomain: "camera-warehouse-9d161.firebaseapp.com",
    projectId: "camera-warehouse-9d161",
    storageBucket: "camera-warehouse-9d161.appspot.com",
    messagingSenderId: "814902701806",
    appId: "1:814902701806:web:ea78ef882cd5784fa84dff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;