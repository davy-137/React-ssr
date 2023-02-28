import './App.css';
import React from 'react';
import Preview from './Components/preview';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <header>
        <p>Davy Bansal</p>
      </header>
      <Router>
        <Routes>
          <Route exact path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </> 
  );
}

export default App;
