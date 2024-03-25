import React, { useState } from 'react';
import axios from 'axios';
import "./loginSignup.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const formData= new FormData();
        formData.append("email",email);
        formData.append("password",password);
        try {
            const response = await axios.post('.../backend/login.php', formData);

            if (response.data.status === 'logged in') {
                console.log('Login successful');
            } else {
                console.error('Login failed:', response.data.status);
            }
        } catch (error) {
            console.error('Error occurred during login:', error.message);
        }
    };
    

    return (
        <div className='login-container'>
            <h2>Login</h2>
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
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
