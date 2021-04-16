import './App.css';
import firebase from "firebase";
import AppPage from "./appPage";
import { useState } from 'react';
import { Button } from '@material-ui/core';

function App() {
  const[login,setLogin]=useState("");
  
  function loginHandler(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => { 
      //var credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      // ...
    }) 
    
    .catch((error) => {
      console.log(error);
    });
  }
  
  const Login=()=>(
    <div id="bg" style={{display:"flex",position:"absolute",bottom:"0",top:"0",right:"0",left:"0",height:"",margin:"",alignItems:"center",justifyContent:"center"}}>
      <div style={{border:"1px solid black",backgroundColor:"#dae0db",padding:"2rem",borderRadius:"1rem"}}>
        <h1 style={{font:"50px bold",}}>
        <div style={{textAlign:"center"}}><strong>The To-Do App</strong></div>
        <div>Login with Google</div></h1>
        <Button style={{marginLeft:"150px",marginTop:"15px"}} variant="contained" color="primary" onClick={loginHandler}>Login/SignUp</Button>
      </div>
    </div>
  )

  {firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setLogin("1");
    } else {
      setLogin("2")
    }
  })}
 
  return (
    <div className="App">
      {login === "1" ? <AppPage/> : <Login/>}
    </div>
  );
}
export default App;
