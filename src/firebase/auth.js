import firebase from "./firebase";
import "firebase/auth";

firebase.auth().useDeviceLanguage();

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const createEmailUserProvider = (email, password) =>
  new firebase.auth().createUserWithEmailAndPassword(email, password);

export const signInEmailUserProvider = (email, password) =>
  new firebase.auth().signInWithEmailAndPassword(email, password);
