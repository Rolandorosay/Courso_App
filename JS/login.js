(function () {

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
firebase.initializeApp(firebaseConfig);

// get elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const logout = document.getElementById("logout");
const loggedInStatus = document.getElementById("loggedInStatus");
const googlelogin = document.getElementById("googlelogin");

//TODO: Add Google Sign in
googlelogin.addEventListener("click", (e) => {
  console.log("google sign in clicked");

  // TODO: Use firebase.auth.GoogleAuthProvider() to implement Google sign in
  // Hint: the user email address is in the results user object: result.user.email
});

// login
login.addEventListener("click", (e) => {
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => console.log(e.message));
});

// signup
signup.addEventListener("click", (e) => {
  // TODO: check for real email
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => console.log(e.message));
});

// logout
logout.addEventListener("click", (e) => {
  firebase.auth().signOut();
});

// login state
firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log(firebaseUser);
    loggedInStatus.innerText = `You are logged in using the following email: ${result.user.email}`;
    logout.style.display = "inline";
    login.style.display = "none";
    signup.style.display = "none";
    email.style.display = "none";
    password.style.display = "none";
    googlelogin.style.display = "none";
  } else {
    console.log("User is not logged in");
    loggedInStatus.innerText = "You are not yet logged in";
    login.style.display = "inline";
    signup.style.display = "inline";
    email.style.display = "inline";
    googlelogin.style.display = "inline";
    password.style.display = "inline";
    logout.style.display = "none";
  }
});
})();
