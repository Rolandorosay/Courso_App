import {initializeApp} from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";



(function(){

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAdgb3Kx4es-L8igRQ2iCb8rb9A4EpKiA",
    authDomain: "courso-d1968.firebaseapp.com",
    databaseURL: "https://courso-d1968-default-rtdb.firebaseio.com/",
    projectId: "courso-d1968",
    storageBucket: "courso-d1968.appspot.com",
    messagingSenderId: "1087897474771",
    appId: "1:1087897474771:web:237a5bc9fe9830dde76626"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Handle on Firebase db
const db = getDatabase();


// Get elements
const message = document.getElementById('message');
const write = document.getElementById('write');
const read = document.getElementById('read');
const status = document.getElementById('status');

// Write
write.addEventListener('click', e => {
    const messages = db.ref('messages');

    // Simple ID - ok for example, do not use in production
    const id = (new Date).getTime();

    // Write to DB
    messages.child(id).set({'message' : message.value})
        .then(function(){
            status.innerHTML = "Wrote to DB!";
    });
});

// Read
read.addEventListener('click', e => {
    status.innerHTML = '';
    const messages = db.ref('messages');

    messages.once('value')
    .then(function(dataSnapshot) {
    var data = dataSnapshot.val();
    var keys = Object.keys(data);  
    
    keys.forEach(function(key){
        console.log(data[key]);
        status.innerHTML += JSON.stringify(data[key]) + '<br>';
        });
    });
});

}());