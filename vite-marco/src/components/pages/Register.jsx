import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Register() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { fetchUsers, registerUser, loading, error } = useAuth();

  const addUser = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchUsers();
      const userFind = data.find(findUser => findUser.user === user);
      if (userFind) {
        console.log('Usuario ya existente:', userFind);
      } else {
        const postData = await registerUser(user, password);
        console.log('Datos enviados satisfactoriamente', postData);    
        navigate('/');  
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const redireccionarLogin = (event) => {
    navigate('/');
  };

  const redireccionarRestorePassword = (event) => {
    navigate('/forgottenPasword');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <form onSubmit={addUser} className="space-y-6">
          <h1 className="text-2xl font-semibold text-center">Register</h1>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="username"
              placeholder="Username"
              maxLength="26"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <FaRegUserCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              placeholder="Password"
              maxLength="26"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <RiLockPasswordLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              required
            />
            <label>Accept Terms & Conditions</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Register'}
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex justify-between text-sm">
            <a
              href="/forgottenPasword"
              onClick={redireccionarRestorePassword}
              className="text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
            <a
              href="/"
              onClick={redireccionarLogin}
              className="text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
