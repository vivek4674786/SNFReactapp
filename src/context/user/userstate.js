import { json } from 'react-router-dom';
import UserContext from './usercontext';
import React, { useState } from "react";
const host = "https://smartandfastrajkot.onrender.com"

const UserState = (props) =>{
    const userInitial = {}
    const [User, setUser] = useState(userInitial)

    const fetchUser = async () => {
        const response = await fetch(`${host}/home/profile/fetchuser`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({})
        });
        const json = await response.json()
        setUser(json)

    }

    return (
        <UserContext.Provider value={{ User, setUser, fetchUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;