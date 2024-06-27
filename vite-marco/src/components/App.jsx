import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Usuarios from './pages/Usuarios'
import Actividad from './pages/ManagerActividades'

function App() {
  return (
    <>
      <div className="w-full h-full bg-gray-200">
        <Router>
          <Routes>          
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgottenPasword" element={<ForgotPassword />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/actividad" element={<Actividad />} />
          </Routes>
        </Router>   
      </div>  
    </>
  );
}

export default App
