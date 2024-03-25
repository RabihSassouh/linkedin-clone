import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import Signup from "./components/signup";
function App() {
    return (
        <div className="app">
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login /> }/>
                        {/* <Signup/> */}
            
                    </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
