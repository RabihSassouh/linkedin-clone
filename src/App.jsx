import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";
import Header from "./components/header";
function App() {
    return (
        <div className="app">
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login /> }/>
                        <Route path="/" element={<Signup/> }/>
                        <Route path="/home" element=
                        {<>
                        <Header/>
                        <Home/>
                        </>
                        }/>
                        
            
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
