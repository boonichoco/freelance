import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "./pages/Home";
import Next from "./pages/Next";
//import Works from "./pages/Works"

const App = () => {
  //const location = useLocation();
  return (
    <BrowserRouter>
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/next" element={<Next />} />
      </Routes>
    </AnimatePresence>
    </BrowserRouter>
    /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Next />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>*/
  );
};

export default App;