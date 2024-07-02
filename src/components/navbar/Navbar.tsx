import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContexts';

function Navbar() {
  const navigate = useNavigate()

  const {usuario, handleLogout } = useContext(AuthContext)

  function logout(){
    handleLogout()
    alert('Usuario deslogado com sucesso')
    navigate('/login')
  }
  return (
    <>
      <div className="color-navbar w-full bg-green-700 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase"> Nutribox</div>

          <div className="flex gap-4">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/home" className="hover:underline">
              Inicio
            </Link>
            <Link to="/sobreNos" className="hover:underline">
              Sobre Nós
            </Link>
            <Link to="/catalogo" className="hover:underline">
              Catalógo
            </Link>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            <div className="hover:underline">Minha Conta</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
