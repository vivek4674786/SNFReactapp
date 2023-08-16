import { json } from 'react-router-dom';
import NoteContext from './addServiceContext';
import React, { useState } from "react";

const NoteState = (props) => {
    let host = "https://smartandfastrajkot.onrender.com"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Add a datat
    const addNote = async ( userName, shopName, email, mobileno, serviceType, userImgage, shopImgage, address, description) => {
        // API Call 
        const response = await fetch(`${host}/home/profile/addedInfo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({  userName, shopName, email, mobileno, serviceType, userImgage, shopImgage, address, description})
        });

        if(json.success){
            const note = await response.json();
            setNotes(notes.concat(note))
            props.showAlert("Account created successfuly", "success")
        }else{
            props.showAlert("Invalid details", "danger")
        }
    }

    return (
        <NoteContext.Provider value={{ addNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;