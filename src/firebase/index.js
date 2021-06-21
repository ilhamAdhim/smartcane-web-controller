import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA58C5Gu6LZ5I_PPHcfP-RlUQMKQ28c35w",
    authDomain: "smartcane-iot.firebaseapp.com",
    projectId: "smartcane-iot",
    storageBucket: "smartcane-iot.appspot.com",
    messagingSenderId: "749995358238",
    appId: "1:749995358238:web:b41ad8f835abdf63dd160f",
    databaseURL: "https://smartcane-iot-default-rtdb.firebaseio.com/",
    measurementId: "G-VNZZPL2WYJ"
};
// Initialize Firebase
export const myFirebase = firebase.initializeApp(firebaseConfig)