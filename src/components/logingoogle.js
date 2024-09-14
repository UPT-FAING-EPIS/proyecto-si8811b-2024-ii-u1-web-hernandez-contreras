import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Crear y agregar la etiqueta <meta>
    const metaTag = document.createElement('meta');
    metaTag.name = "google-signin-client_id";
    metaTag.content = process.env.REACT_APP_GOOGLE_CLIENT_ID; // Usar la variable de entorno
    document.head.appendChild(metaTag);

    // Función para cargar el script de Google
    const loadGoogleScript = () => {
      return new Promise((resolve, reject) => {
        const existingScript = document.getElementById('google-platform-script');
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = "https://apis.google.com/js/platform.js";
        script.id = 'google-platform-script';
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Google script'));
        document.body.appendChild(script);
      });
    };

    // Cargar el script de Google
    loadGoogleScript()
      .then(() => {
        console.log('Google script loaded successfully');
        // Configurar el botón de Google Sign-In
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID
          }).then(() => {
            console.log('Google Auth initialized');
          });
        });
      })
      .catch(error => {
        console.error('Error loading Google script:', error);
      });

    // Limpiar los elementos cuando el componente se desmonte
    return () => {
      document.head.removeChild(metaTag);
      const existingScript = document.getElementById('google-platform-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // La función onSignIn debe ser accesible globalmente
  window.onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  };

  return (
    <div>
      <h2>Ingresa con tu cuenta de Google</h2>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
}

export default App;
