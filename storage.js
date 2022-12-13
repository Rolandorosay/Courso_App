import {initializeApp} from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";



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
const file = document.getElementById('file');
const upload = document.getElementById('upload');
const download = document.getElementById('download');
const status = document.getElementById('status');
const image = document.getElementById('image');

// Upload File
upload.addEventListener('click', e => {

// Create a file reference
var ref = storageRef.child('globe');
let photo = document. getElementById('file').files[0];

// Upload
ref.put(photo).then(function(snapshot){
    console.log('Upload a blob or file!');
    status.innerHTML = 'Upload blob or file!'
    });
});

// Download File
download.addEventListener('click', e => {
    // File Reference
    var ref = storage.ref('globe');

    ref.getDownloadURL().then(function(url) {
        // Insert url into an <img> tag to "download"
        image.src = url;
        status.innerHTML = 'Download blob or file!'
    }).catch(function(error){console.log(error)});
});



}());