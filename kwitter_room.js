

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCq_D63xllyCD4xsqiLYRV_84a6cj83k5E",
  authDomain: "chatapp-12bc9.firebaseapp.com",
  databaseURL: "https://chatapp-12bc9.firebaseio.com",
  projectId: "chatapp-12bc9",
  storageBucket: "chatapp-12bc9.appspot.com",
  messagingSenderId: "1016967648867",
  appId: "1:1016967648867:web:5d42cc542ee3744e728a56",
  measurementId: "G-TMD007B6ZB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -"+Room_names);
      row="<div class='room_name' id=" + Room_names+ " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"Adding room name"

  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html"
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}


