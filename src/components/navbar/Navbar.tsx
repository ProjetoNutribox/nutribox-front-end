import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from '../../contexts/AuthContexts';
import logo from '../../assets/logo.png'
import { toastAlerta } from '../../util/toastAlert';
import { PiShoppingCartThin } from 'react-icons/pi';
import { IoMenu } from "react-icons/io5";


function Navbar() {


  const navigate = useNavigate()

  const {usuario, handleLogout } = useContext(AuthContext)

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  function logout(){
    handleLogout()
    toastAlerta('Usuario deslogado com sucesso', "sucesso")
    navigate('/login')
  }

  let navBarComponent

  if(usuario.token !== ''){
    navBarComponent= (
      <div className="color-navbar text-white  justify-center py-2 px-4 ">
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
      <div className="color-navbar w-screen text-white flex justify-center py-2 px-4 ">

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
     <div className="color-navbar w-screen text-white  flex justify-between items-center py-2 px-4  relative">
      <div className='flex gap-2 items-center'>
        <h1 className="text-2xl font-semibold">NutriBox</h1>
        <img src={logo} alt="Logo" />
      </div>

      <div className="md:hidden">
      <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16m-7 6h7" />
            <IoMenu size={30} />
          </svg>
        </button>
        
      </div>

      <div className={`absolute top-14 right-0 container   w-full md:w-auto md:static  md:flex md:gap-5 ${isOpen ? 'block' : 'hidden mr-8' }`}>
        {usuario.token !== '' ? (
          <div className="flex bg-gray-800 md:bg-transparent flex-col md:flex-row gap-2 p-2 md:gap-5">
            <Link to="/home" className="hover:underline">Início</Link>
            
            <Link to="/sobreNos" className="hover:underline">Sobre</Link>
            
            <Link to="/catalogo" className="hover:underline">Catálogo</Link>
            
            <Link to='/perfil' className="hover:underline">Minha Conta</Link>
            
            <Link to='/carrinho'>
              <PiShoppingCartThin className='w-7 h-7  hover:' />
            </Link>
            <Link to='/login' onClick={logout}>
              <button className='border rounded-lg px-10 bg-white text-[#457D00] hover:bg-[#FB7F01] hover:text-white hover:underline'>Sair</button>
            </Link>
          </div>
        ) : (
          <div className="flex bg-gray-800 md:bg-transparent  flex-col  md:flex-row gap-2 md:gap-5">
            <Link to="/home" className="hover:underline">Início</Link>
            
            <Link to="/sobreNos" className="hover:underline">Sobre</Link>
            
            <Link to="/catalogo" className="hover:underline">Catálogo</Link>
            
            <Link to="/login">
              <button className='border rounded-lg px-9 bg-white text-[#457D00] hover:bg-[#FB7F01] hover:text-white hover:underline'>Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Navbar;
