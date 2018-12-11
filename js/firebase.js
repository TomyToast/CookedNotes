// Initialize Firebase
var config = {
    apiKey: "AIzaSyBXYDgiHSOa2lRydqJjsIrjnvY3IE7ZdxE",
    authDomain: "cookednotes.firebaseapp.com",
    databaseURL: "https://cookednotes.firebaseio.com",
    projectId: "cookednotes",
    storageBucket: "cookednotes.appspot.com",
    messagingSenderId: "358546125085"
};
firebase.initializeApp(config);

var database = firebase.database();
var defaultAuth = firebase.auth();

var app = document.getElementById('app');
var dbRef = firebase.database().ref().child('recipe');

// dbRef.on('value', recipe => app.innerText = recipe.val());


console.log(dbRef);
