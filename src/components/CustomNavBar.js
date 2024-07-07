import React from 'react';
import { Link } from 'react-router-dom';
import './CustomNavBar.css';

function CustomNavbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/forms">Encuestas de Satisfacción</Link></li>
        <li><Link to="/intel">Visualizaciones - Intel</Link></li>
      </ul>
    </nav>
  );
}

export default CustomNavbar;