//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
