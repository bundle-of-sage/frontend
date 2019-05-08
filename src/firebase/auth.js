import firebase from "./firebase";
import "firebase/auth";

firebase.auth().useDeviceLanguage();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
