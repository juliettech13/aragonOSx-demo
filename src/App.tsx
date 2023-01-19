import React from 'react';
import LandingPage from './pages/LandingPage';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage/>
    </div>
  );
}

export default App;
