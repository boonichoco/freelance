import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Next from "./pages/Next";
import Works from "./pages/Works"

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Next />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;