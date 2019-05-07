import config from "./config";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(config);
firebase.auth().useDeviceLanguage();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
