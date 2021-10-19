import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDrjYj6jCUbqA5V2sy4jTM6Jl4Dz9IYtSI",
    authDomain: "uber-eats-clone-39ab5.firebaseapp.com",
    projectId: "uber-eats-clone-39ab5",
    storageBucket: "uber-eats-clone-39ab5.appspot.com",
    messagingSenderId: "822048171564",
    appId: "1:822048171564:web:8187554d6314d0a65c9389"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;