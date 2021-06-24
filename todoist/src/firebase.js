import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCJoxvjYohMZJprFIUoYZKr3xaPGmKfgDc",
    authDomain: "todoist-9b3f9.firebaseapp.com",
    databaseURL: "https://todoist-9b3f9-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todoist-9b3f9",
    storageBucket: "todoist-9b3f9.appspot.com",
    messagingSenderId: "469529045052",
    appId: "1:469529045052:web:9494cbb541cd4471f83b39"
});

export { firebaseConfig as firebase };