

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyBWBtPi_kf7uF6-WmaHK8VpMZVMCAQgLr8",
  authDomain: "classtest-8ac10.firebaseapp.com",
  databaseURL: "https://classtest-8ac10-default-rtdb.firebaseio.com",
  projectId: "classtest-8ac10",
  storageBucket: "classtest-8ac10.appspot.com",
  messagingSenderId: "329843112575",
  appId: "1:329843112575:web:629845af44a86ff5171d4a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
