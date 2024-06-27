import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [username, setUsername] = useState('');
  const [passwordTxt, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const getSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://192.168.100.6:8080/usuario/allUsuario');
      const data = await response.json();
      
      const userFind = data.find(user => user.user === username && user.password === passwordTxt);
      console.log(data);
   
      
      if (userFind) {
        console.log('Usuario encontrado:', userFind);
        navigate('/usuarios');
      } else {
        console.log('Usuario no encontrado');
        setErrorMsg('Usuario o contraseña incorrecta');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setErrorMsg('Error en la comunicación con el servidor');
    }
  };

  return {
    username, setUsername,
    passwordTxt, setPassword,
    errorMsg, setErrorMsg,
    getSubmit
  };
};

export default useLogin;
