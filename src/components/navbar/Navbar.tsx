import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContexts';
import logo from '../../assets/logo.png'
import { toastAlerta } from '../../util/toastAlert';
import { PiShoppingCartThin } from 'react-icons/pi';



function Navbar() {


  const navigate = useNavigate()

  const {usuario, handleLogout } = useContext(AuthContext)

  function logout(){
    handleLogout()
    toastAlerta('Usuario deslogado com sucesso', "sucesso")
    navigate('/login')
  }

  let navBarComponent

  if(usuario.token !== ''){
    navBarComponent= (
      <div className="color-navbar w-full text-white  justify-center py-2 px-4 ">
      <div className="container flex justify-between text-lg  items-center">

        <div className='flex gap-2 items-center '>
        <h1 className="text-2xl font-semibold"> NutriBox</h1>
       <div><img src={logo} alt="" /></div>
       </div>

        <div className="flex gap-5">
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
          <Link to='/perfil' className="hover:underline">Minha Conta</Link>
          <span>|</span>
          <Link to="/carrinho" ><PiShoppingCartThin className=' w-7 h-7 mr-7 ml-7 hover:' /></Link>
          <Link to='/login' onClick={logout} >
          <button className='border rounded-lg px-10 bg-white text-[#457D00] hover:bg-[#FB7F01] hover:text-white hover:underline'>Sair</button> 
          </Link>
        </div>
      </div>
    </div>

    )

  }else {
    navBarComponent = (
      <div className=" color-navbar w-full text-white flex justify-center py-2 px-4 ">

      <div className="container flex justify-between text-lg  items-center">

        <div className='flex gap-2 items-center '>
        <h1 className="text-2xl font-semibold"> NutriBox</h1>
       <div><img src={logo} alt="" /></div>
       </div>

        <div className="invisible md:visible flex gap-5 ">
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
          
          <Link to="/login" >
          <button className='border rounded-lg px-9 bg-white text-[#457D00] hover:bg-[#FB7F01] hover:text-white hover:underline'>Login</button>
             
          </Link>
          

        </div>
      </div>
    </div>
    )
  }


  return (
    <>
     {navBarComponent}
    </>
  );
}

export default Navbar;
