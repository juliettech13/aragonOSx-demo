import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import CreateProposalPage from './pages/CreateProposalPage';
import NavBar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './App.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-proposal" element={<CreateProposalPage />} />
      </Routes>
    </div>
  );
}

export default App;
