import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCNZgV4bir5IdDY6OkQxslX8sQQ_GyUVAE",
    authDomain: "restaurantapp-95851.firebaseapp.com",
    databaseURL: "https://restaurantapp-95851-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-95851",
    storageBucket: "restaurantapp-95851.appspot.com",
    messagingSenderId: "1084668076005",
    appId: "1:1084668076005:web:a788c7146f613c9062d90c"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }