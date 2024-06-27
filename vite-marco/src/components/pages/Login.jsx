import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

export default function Login() {
  const { username, setUsername, passwordTxt, setPassword, errorMsg, getSubmit } = useLogin();
  const navigate = useNavigate();
  const redireccionarRestorePassword = (event) => {
    navigate('/forgottenPasword');
  };
  const redireccionarRegister = (event) => {
    navigate('/register');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-lg">
        <div className="flex flex-col p-8 w-full">
          <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
          <div className="flex justify-center space-x-4 mb-4">
            <button className="p-2 bg-white rounded-full shadow-md text-blue-700"><RiFacebookFill /></button>
            <button className="p-2 bg-white rounded-full shadow-md text-pink-500"><FaInstagram /></button>
            <button className="p-2 bg-white rounded-full shadow-md"><IoLogoGithub /></button>
          </div>
          <p className="text-sm text-center text-gray-600 mb-4">Use your user and password</p>
          <form onSubmit={getSubmit} className="space-y-4">
            <div className="relative">
              <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="w-full py-2 px-4 border border-gray-400 rounded-md focus:outline-none focus:border-black"
                required 
              />
              <FaRegUserCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative">
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={passwordTxt} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full py-2 px-4 border border-gray-400 rounded-md focus:outline-none focus:border-black"
                required 
              />
              <RiLockPasswordLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="text-center text-red-500 text-sm">{errorMsg}</div>
            <div className="text-center">
              <a  href="/forgottenPasword"
              onClick={redireccionarRestorePassword} className="text-sm text-blue-500 hover:underline">Forgot your Password?</a>
            </div>
            <button type="submit" className="w-full py-2 px-4 bg-teal-700 text-white rounded-md hover:bg-teal-800">
              Login
            </button>
          </form>
        </div>
        <div className="hidden lg:flex flex-col justify-center items-center bg-teal-700 text-white p-8 rounded-r-lg">
          <h2 className="text-xl font-bold mb-4">Welcome, User!</h2>
          <p className="text-sm text-center mb-4">Register with your personal information to access all our features</p>
          <a href="/register" onClick={redireccionarRegister}className="py-2 px-4 bg-teal-800 text-white rounded-md hover:bg-teal-900">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
