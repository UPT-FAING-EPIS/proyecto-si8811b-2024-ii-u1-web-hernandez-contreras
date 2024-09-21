import React, { useState } from 'react';
import { login } from '../services/api'; // importa la función para hacer solicitudes de login desde el archivo api.js
import './login.css'; 

const Login = () => {
  // Estado local para almacenar el nombre de usuario
  const [email, setEmail] = useState('');
  // Estado local para almacenar la contraseña
  const [password, setPassword] = useState('');

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // previene el comportamiento predeterminado del formulario (recarga de la página)

    // Llama a la función de login desde el archivo api.js, enviando el nombre de usuario y la contraseña
    login(email, password)
      .then(response => {
        // Si la solicitud es exitosa, maneja la respuesta aquí
        console.log('Login successful:', response.data);
        // Ejemplo: redirige al usuario a otra página o almacena un token de autenticación
      })
      .catch(error => {
        // Si ocurre un error durante la solicitud, maneja el error aquí
        console.error('Login error:', error);
        // Ejemplo: muestra un mensaje de error al usuario
      });
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1> 
      <form onSubmit={handleSubmit}> 
        <div>
          <label>Username</label> 
          <input
            type="text"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} // actualiza el estado local con el nuevo valor
          />
        </div>
        <div>
          <label>Password</label> 
          <input  
            type="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} // actualiza el estado local con el nuevo valor
          />
        </div>
        <div>
        <button type="submit">Acceder</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
