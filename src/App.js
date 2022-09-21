import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Test from "./components/Test";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" elements={<Home />}/>
                <Route path="/test" elements={<Test />}/>
            </Routes>
        </BrowserRouter>
    );
};


export default App;