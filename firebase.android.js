import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyADORro_hpKQE2rjy94BmdzXO1PhtPnNYc",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);