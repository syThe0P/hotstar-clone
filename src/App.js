import React from 'react';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          {/* Add more routes here if needed */}
        </Routes>

      </Router>
    </div>
  );
}

export default App;
