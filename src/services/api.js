import axios from 'axios';

const backend_url = process.env.REACT_APP_API_URL;
// funcion para enviar los datos de login a la API
export const login = (email, password) => {
  // envia una solicitud POST a la ruta de login de la API con el nombre de usuario y la contraseña
  return axios.post(`${backend_url}`, { email, password });
};
//prueba de restriccion