import React, { useState } from 'react';
import axios from 'axios';
import "./loginSignup.css";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        axios.post('.../backend/signup.php', {
            name: name,
            email: email,
            password: password
        })
        .then(response => {
            console.log(response.data); 
        })
        .catch(error => {
            console.error('Error:', error); 
        });
    };

    return (
        <div>
            <h2>Signup</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
