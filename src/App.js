import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Next from "./pages/Next";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Next />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;