import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContexts';
import logo from '../../assets/logo.png'


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
      <div className="color-navbar w-full text-white flex justify-center py-2 px-4 ">
        <div className="container flex justify-between text-lg  items-center">

          <div className='flex gap-2 items-center '>
          <h1 className="text-2xl font-semibold"> NutriBox</h1>
         <div><img src={logo} alt="" /></div>
         </div>

          <div className="flex gap-5">
            <Link to="/login" className="hover:underline">
               Login  
            </Link>
            <span>|</span>
            <Link to="/home" className="hover:underline">
              Início
            </Link>
            <span>|</span>
            <Link to="/sobreNos" className="hover:underline">
             Sobre   
            </Link>
            <span>|</span>
            <Link to="/catalogo" className="hover:underline">
              Catálogo
            </Link>
            <span>|</span>
            <Link to='' onClick={logout} className='hover:underline'>   Sair   </Link>
            <span>|</span>
            <div className="hover:underline">Minha Conta</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
