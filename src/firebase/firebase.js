import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAztwx_8AlD53Q1m01oHQQJHZZDsKap5s",
    authDomain: "blog-app-1b44c.firebaseapp.com",
    databaseURL: "https://blog-app-1b44c.firebaseio.com",
    projectId: "blog-app-1b44c",
    storageBucket: "",
    messagingSenderId: "121209392505",
    appId: "1:121209392505:web:2d6ebba555f3410d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { googleAuthProvider, firebase as default };