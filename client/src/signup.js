import React from "react";
import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function SignUp() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const addUser = () => {
        Axios.post('http://localhost:3001/signup', {
            name: name,
            username: username,
            email: email,
            password: password,
        }).then(() => {
            console.log(" User details inserted successfully");
        });
    };


    return (
        <div className="user-details">
            <label>Name</label>
            <input type="text" onChange={(event) => {
                setName(event.target.value)
            }}></input>
            <label>E-mail</label>
            <input type="text" onChange={(event) => {
                setEmail(event.target.value)
            }}></input>
            <label>Username</label>
            <input type="text" onChange={(event) => {
                setUsername(event.target.value)
            }}></input>
            <label>Password</label>
            <input type="text" onChange={(event) => {
                setPassword(event.target.value)
            }}></input>
            <button className="add-movie btn btn-danger" onClick={addUser}>Sign Up</button>
        </div>
    );
}

export default SignUp;