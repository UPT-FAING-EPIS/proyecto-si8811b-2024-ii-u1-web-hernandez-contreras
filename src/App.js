import React from 'react';
import Login from './components/login'; 
import LoginGoogle from './components/logingoogle'
import './App.css';

function App() {
  return (
    <div className="App">
      <Login /> {/* muestra el componente Login */}
      <div className="google-login-container">
        <LoginGoogle /> {/* muestra el componente Login de Google */}
      </div>
    </div>
  );
}

export default App;