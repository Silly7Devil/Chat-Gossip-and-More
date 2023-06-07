var firebaseConfig = {
    apiKey: "AIzaSyBodx_C1VBhdWGD0ht1fTMmR2PbnkFem9M",
    authDomain: "chatgossip-and-more.firebaseapp.com",
    projectId: "chatgossip-and-more",
    storageBucket: "chatgossip-and-more.appspot.com",
    messagingSenderId: "980967783874",
    appId: "1:980967783874:web:7e2785e54d75e3dbc62a5b"
  };
  firebase.initializeApp(firebaseConfig);
  
  function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }