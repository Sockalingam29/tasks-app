import { Button } from '@material-ui/core';
import React from 'react'
import { db } from './firebase_config';
import firebase from "firebase";

export default function TodoList({ todo, inprogress, id }) {
    
    function progressHandler(){
        db.collection(`${firebase.auth().currentUser.email}`).doc(id).update({
            completed:!inprogress
        })
    }
    

    function deleteHandler(){
        db.collection(`${firebase.auth().currentUser.email}`).doc(id).delete();
    }
    
    return (
        <div>
            
            <div style={{display:"flex", padding:"10px 0px"}}>
            <p style={{margin:"auto",width:"100%"}}>
                <div>{inprogress ? <strike>{todo}</strike> : <strong>{todo}</strong>}</div>
                <small>{inprogress ? "Done" : "In Progress"}</small>
                
            </p>
            <Button color="primary" style={{margin:"2px"}} onClick={progressHandler} style={{}}>
                {inprogress ? "Undone" : "Done"}
            </Button>
            <Button color="secondary" onClick={deleteHandler} style={{}}>X</Button>
            
        </div>
           
        <hr></hr>
        </div>
       
    );
}

