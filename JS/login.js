import {initializeApp} from "firebase/app";

(function(){

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAdgb3Kx4es-L8igRQ2iCb8rb9A4EpKiA",
    authDomain: "courso-d1968.firebaseapp.com",
    databaseURL: "https://courso-d1968-default-rtdb.firebaseio.com",
    projectId: "courso-d1968",
    storageBucket: "courso-d1968.appspot.com",
    messagingSenderId: "1087897474771",
    appId: "1:1087897474771:web:237a5bc9fe9830dde76626"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a root reference
var storage = firebase.storage();
var storageRef = storage.ref();

// Get UI Elements
const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const logout = document.getElementById('logout');

// Login
login.addEventListener('click', e => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => console.log(e.message));
});

// SignUp
signup.addEventListener('click', e => {
// TODO: check for real email
const auth = firebase.auth();
const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
promise.catch(e => console.log(e.message));
});

// Logout
logout.addEventListener('click', e => {
    firebase.auth().signOut();
});

// Login State
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        logout.style.display = 'inline';
        login.style.display = 'none';
        signup.style.display = 'none'; 
    }
    else{
        console.log('User is not logged in');
        logout.style.display = 'none';
        login.style.display = 'inline';
        signup.style.display = 'inline';
    }
});

    
}());