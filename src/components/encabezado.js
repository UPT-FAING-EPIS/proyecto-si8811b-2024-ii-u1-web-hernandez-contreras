import React, { useState } from 'react';
import './Encabezado.css';

export const Encabezado = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="logo">Mi App</div>
      <div className="menu">
        <button onClick={toggleMenu} className="menu-button">
          ☰ Menú
        </button>
        {isOpen && (
          <ul className="menu-list">
            <li>Inicio</li>
            <li>Inasistencias</li>
            <li>Cuenta</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Encabezado; 
