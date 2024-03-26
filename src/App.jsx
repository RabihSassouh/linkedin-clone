import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Athentications/login";
import Signup from "./Pages/Athentications/signup";
import Home from "./Pages/HomePage/home";
import Header from "./Pages/HomePage/components/header";
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
