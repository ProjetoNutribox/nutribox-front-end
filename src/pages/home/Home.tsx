import React from 'react';
//import homeLogo from '../../asset'
import './Home.css';
//import imageBoxes from './../../assets/Boxes.png'
import Caixa from './../../assets/Caixa.png'
import Box1 from './../../assets/Box1.png'
import Cesta1 from './../../assets/Cesta22.png'
import agricultores from '../../assets/agricultores.png'
import ModalAviso from './../../pages/home/modalHome/ModalAviso'
import { Link } from 'react-router-dom';




function Home() {
    return (
        <>
        <div className="flex justify-center fundoHome">
          <div className='container grid grid-cols-1 md:grid-cols-2 text-white items-center  justify-center'>

            
            <div className="flex flex-col gap-4 items-center justify-center   py-4">

              <div className='flex flex-col gap-6'>
              <h2 className='text-xl md:text-5xl font-light leading-snug text-center'>Plantando Esperança <br/>
                & Cultivando Alimentos</h2>
               
              <span className='text-4xl  font-medium py-5 text-center italic'> Nutrindo Vidas</span>
              </div>
              <div className="flex justify-around gap-6">
              
            <Link to ='/produtos' className='rounded-2xl bg-white text-lime-800  text-xl  hover:bg-[#EEBA0B] font-bold py-4 px-8'>    <button >VEM PRA HORTA</button></Link>
              
              </div>
            </div>
          </div>
        
        </div>

        <div className='bg-[#538d22] justify-center text-white py-5  flex gap-4 items-end'>

          
          <img src={Caixa} alt="" className='h-16'/>
          

  <h2 className='text-2xl md:text-4xl font-normal'>Escolha sua   <span className='font-semibold text-[#EEBA0B]'>BOX</span></h2>
  <img src={Caixa} alt=""  className='h-16'/>
  {/* <img src={imageBoxes} alt="" className='' /> */}
</div>





<div className='grid grid-cols-1 px-6 md:grid-cols-2 lg:grid-cols-4 sm:px-5 text-center my-16 gap-4 mx-auto container text-white'>

  <div className='bg-[#538d22] flex flex-col   rounded-3xl'>
    
    <div>
    <img src={Box1} alt="" className=' rounded-t-3xl' />
    </div>
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-xl  font-semibold'> MINI BOX</h2>
    <p>Produtos selecionados da safra de inverno</p>
    <p>R$ 40,00 x 15 itens inclusos</p>
    <p className='bg-slate-100 bg-opacity-80 text-slate-800 p-2 rounded-lg'>Serve até <span className='text-lime-900 font-semibold'>2 pessoas</span> </p>
   <Link to= "/produtos" className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl hover:bg-[#EEBA0B]'><button >Eu quero</button></Link> 
    </div>

  </div>

  <div className='bg-[#538d22] flex flex-col    rounded-3xl  '>
    
    <div>
    <img src={Box1} alt="" className=' rounded-t-3xl' />
    </div>
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-xl  font-semibold'>  MÉDIA BOX</h2>
    <p>Produtos selecionados da safra de inverno</p>
    <p>R$ 60,00 x 25 itens inclusos</p>
    <p className='bg-slate-100 bg-opacity-80 text-slate-800 p-2 rounded-lg'>Serve até <span className='text-lime-900 font-semibold'>4 pessoas</span> </p>

    <Link to= "/produtos" className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl hover:bg-[#EEBA0B]'><button >Eu quero</button></Link> 
    </div>

  </div>

  <div className='bg-[#538d22] flex flex-col    rounded-3xl  '>
    
    <div>
    <img src={Box1} alt="" className=' rounded-t-3xl' />
    </div>
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-xl  font-semibold'> BIG BOX</h2>
    <p>Produtos selecionados da safra de inverno</p>
    <p>R$ 90,00 x 35 itens inclusos</p>
    <p className='bg-slate-100 bg-opacity-80 text-slate-800 p-2 rounded-lg'>Serve até <span className='text-lime-900 font-semibold'>6 pessoas</span> </p>

    <Link to= "/produtos" className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl hover:bg-[#EEBA0B]'><button >Eu quero</button></Link> 
    </div>

  </div>

  <div className='bg-[#538d22] flex flex-col    rounded-3xl  '>
    
    <div>
    <img src={Box1} alt="" className=' rounded-t-3xl' />
    </div>
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-xl  font-semibold'> BOX PERSONALIZADA</h2>
    <p>Produtos selecionados da safra de inverno</p>
    <p>R$ 120,00 x até 35 itens inclusos</p>
    <p className='bg-slate-100 bg-opacity-80 text-slate-800 p-2 rounded-lg'>Serve até <span className='text-lime-900 font-semibold'>6 pessoas</span> </p>

    <ModalAviso /> 
    </div>

  </div>

</div>




<div className=' flex flex-col items-center gap-5 text-[#31572C]  '>
<h2 className='font-semibold text-lg md:text-5xl text-[#31572C]'>Como funciona o NutriBox?</h2>

<p className='text-lg  md:text-3xl text-center text-[#FB7F01] font-medium'> Faça a sua feira aqui e escolha alimentos de qualidade.</p>
</div>


<div className='bg-[#31572C] rounded-full p-10  my-10 container mx-auto'>

<div className='grid grid-cols-1 md:grid-cols-2 container gap-10 mx-auto my-10'>
<div className='flex flex-col   rounded-3xl  '>
    
    <div>
    <img src={Cesta1} alt="" className=' rounded-t-3xl w-full' />
    </div>

<div className='gap-6 flex flex-col p-8 items-center justify-center h-full bg-[#e5e5e5] rounded-b-3xl '>
   
    <h3 className='text-2xl md:text-3xl text-center font-semibold text-[#fb5607] '>O vem na minha BOX?</h3>
    <p className='md:text-xl text-center font-normal '>Nós selecionamos alimentos orgânicos e nutritivos  direto de <span className='font-semibold'>pequenos produtores.</span></p>
    <p className='md:text-xl text-center font-normal '>Você pode escolher uma  <span className='font-semibold'>cesta pronta</span> com alimentos pré selecionados , e em breve poderá   <span className='font-semibold'>personalizar</span> sua cesta de acordo com a sua preferência.</p>
    <p className='md:text-xl text-center font-normal '> Selecionamos alimentos de acordo com a safra do mês, garantindo frescor, sabor excepcional e um menor impacto ambiental.</p>

    <Link className='bg-[#EEBA0B]  py-4 px-2 w-1/3 rounded-xl  md:text-sm lg:text-xl text-white hover:bg-[#679436]  hover:underline text-center' to='/catalogo'>
    <button >Faça sua feira</button>
    </Link>
    
    </div>
    

  </div>




  <div className='flex flex-col   rounded-3xl  '>
    
    <div>
    <img src={agricultores} alt="" className=' rounded-t-3xl w-full ' />
    </div>

<div className='gap-6 flex flex-col p-8 items-center justify-center h-full md:pb-12  bg-[#e5e5e5] rounded-b-3xl '>
    <h3 className='text-2xl md:text-3xl  text-center font-semibold text-[#fb5607]'>Comprando com a gente você estará:
    </h3>
    <p className='text-x md:text-xl text-center font-normal '> <span className='font-semibold'>Ajudando</span> na renda de pequenos produtores rurais.</p>
    <p className='text-x  md:text-xl text-center font-normal '><span className='font-semibold'>Contribuindo</span> com a doação para ONGs que combatem a fome no mundo.</p>
    <p className='text-x  tmd:text-xl text-center font-normal '>Adquirindo alimentos frescos e de qualidade da <span className='font-semibold'>safra do mês</span>.</p>

    <p className='text-x md:text-xl text-center font-normal '>Alimentando-se  com <span className='font-semibold'>alimentos nutritivos</span> e  <span className='font-semibold'>livres de agrotóxicos</span>.</p>
 
    <Link to='/sobreNos' className='  bg-[#FB7F01] md:mt-10 py-4 px-2 w-1/3 rounded-xl  md:text-sm lg:text-xl text-white hover:bg-[#679436]   hover:underline text-center'>
    <button >Saiba mais</button>
    </Link>
    </div>

  </div>
  </div>

  </div>


<div className=' flex flex-col items-center  gap-5 text-[#31572C] '>
<h2 className='font-semibold text-lg md:text-4xl text-[#31572C]'>Por que escolher o NutriBox?</h2>

<p className='text-lg text-center mx-4 lg:text-3xl text-[#FB7F01] font-medium'>Compre alimentos sem agrotóxicos e contribua com a nossa causa.</p>
</div>




       
       

<div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-center my-16 gap-6 px-10 mx-auto container text-white'>

  
  <div className='flex flex-col  gap-6 rounded-3xl fundoHome2 w-full px-10 '>
    
    
<div className='gap-4 flex flex-col p-5  items-center justify-center h-full my-auto text-xl  '>
    <h2 className='md:text-3xl lg:text-3xl font-semibold uppercase text-[#FB7F01]'>Você está no controle.</h2>
    <p>Faça o pedido da sua box direto pelo site e receba na mesa da sua casa.</p>
    <p>Com apenas um <span className='text-xl bg-orange-400 w-10 p-1 rounded-xl font-medium'>CLIQUE</span> você terá a sua feira da semana sem precisar sair de casa.</p>
    <p>Nossos alimentos orgânicos te ajudarão a manter uma alimentação saudável.</p>
    {/* <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Eu quero</button> */}
    </div>

  </div>

 

  

  
  <div className='flex flex-col  gap-6   rounded-3xl fundoHome3 w-full px-10 '>
    
    
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full my-auto text-xl  '>
    <h2 className='md:text-3xl lg:text-3xl  font-semibold uppercase text-[#FB7F01]'>Benefícios para a saúde </h2>
    <p>Menor exposição a pesticidas e produtos químicos.</p>
    <p>Maior teor nutricional.</p>
    <p>Melhor sáude do coração.</p>
    <p>Melhor saúde geral.</p>
    <p>Redução de resíduos de antibióticos e hormônios.</p>
    {/* <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Eu quero</button> */}
    </div>

  </div>

  

  
  <div className='flex flex-col  gap-6  rounded-3xl fundoHome4 w-full px-10 '>
    
    
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full my-auto text-xl lg:pb-14 '>
    <h2 className='text-3xl  font-semibold uppercase text-[#FB7F01]'>Colabore com a causa</h2>
    <p>Redução da fome e insegurança alimentar.</p>
    <p>Redução da desigualdade.</p>
    <p>Crescimento da conscientização social.</p>
    <p>Melhoria da nutrição infantil.</p>
    
    {/* <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Eu quero</button> */}
    </div>

  </div>

  

</div>

       

          
      </>
    );
}

export default Home;