import firebase from "firebase/app";

const config = {
  projectId: "bundle-of-sage",
  apiKey: process.env.REACT_APP_FBASE_WEB_KEY,
  authDomain: process.env.REACT_APP_FBASE_DOMAIN,
  databaseURL: "https://bundle-of-sage.firebaseio.com"
};

firebase.initializeApp(config);
export default firebase;
