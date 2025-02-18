import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import WelcomePage from './pages/WelcomePage';

function getToken() {
  return sessionStorage.getItem('token');
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
          </Routes>
        </Router>
        <div className="end-page-spacer"></div>
      </header>
    </div>
  );
}

export default App;
