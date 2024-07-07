import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SurveyForms from './components/SurveyForms';
import Intel from './components/Intel';
import CustomNavBar from './components/CustomNavBar';
import './App.css';

function App() {
  return (
    <Router>
      <CustomNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<SurveyForms />} />
        <Route path="/intel" element={<Intel />} />
      </Routes>
    </Router>
  );
}

export default App;
