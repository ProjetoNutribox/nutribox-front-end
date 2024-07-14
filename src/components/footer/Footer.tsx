

import React from 'react'
import { LinkedinLogo ,LinktreeLogo,GithubLogo} from '@phosphor-icons/react'
import { Link} from "react-router-dom";
import './Footer.css'
import logo from '../../assets/logo.png'

function Footer() {
 
  

  return (
    <>
        {/* <div className="flex justify-center footer text-white ">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-light'> Nutrindo vidas | Copyright: Nutribox 2024</p>
            <p className='text-lg'>Entre em contato </p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div> */}

<footer className="bg-[#457D00]">
  
  <div className="mx-auto max-w-5xl px-2 py-8 sm:px-6 lg:px-8">



    <div className="flex justify-center text-white">
    <div className='flex gap-2 items-center '>
          <h1 className="text-2xl font-semibold"> NutriBox</h1>
         <div><img src={logo} alt="" /></div>
         </div>

       
    </div>

    <p className="mx-auto mt-6 text-center  text-white">
    Plantando Esperança: Cultivando Alimentos, Nutrindo vidas
    </p>

    <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <Link className="text-white  transition hover:text-white/75" to="/home"> Início</Link>
      </li>

      <li>
      <Link className="text-white  transition hover:text-white/75" to="/sobreNos">Sobre nós</Link>
      </li>

      <li>
      <Link className="text-white  transition hover:text-white/75" to="/catalogo"> Catálogo</Link>
      </li>

      
    </ul>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">

      

      <li>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="text-white transition hover:text-white/75"
        >
          <span className="sr-only">Linkedin</span>
          <LinkedinLogo size={30} weight='light' />
        </a>
      </li>

      <li>
        <a
          href="https://linktr.ee/projeto.nutribox"
          rel="noreferrer"
          target="_blank"
          className="text-white transition hover:text-white/75"
        >
          <span className="sr-only">Link Tree</span>
          <LinktreeLogo size={30} weight='light' />
          
        </a>
      </li>

      <li>
        <a
          href="https://github.com/ProjetoNutribox"
          rel="noreferrer"
          target="_blank"
          className="text-white transition hover:text-white/75"
        >
          <span className="sr-only">GitHub</span>
          <GithubLogo size={30} weight='light' />
        </a>
      </li>

      
    </ul>
  </div>
</footer>


      </>
  )
}

export default Footer