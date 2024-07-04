import React from 'react';
//import homeLogo from '../../asset'
import './Home.css';
//import imageBoxes from './../../assets/Boxes.png'
import Caixa from './../../assets/Caixa.png'
import Box1 from './../../assets/Box1.png'
import Cesta1 from './../../assets/Cesta1.png'
import agricultor from './../../assets/agricultor.png'



function Home() {
    return (
        <>
        <div className=" w-full  flex justify-center fundoHome">
          <div className='container grid grid-cols-2 text-white items-center  justify-center'>

            
            <div className="flex flex-col gap-4 items-center justify-center   py-4">

              <div className='flex flex-col gap-6'>
              <h2 className='text-5xl font-light leading-snug text-center'>Plantando Esperança <br/>
                & Cultivando Alimentos</h2>
               
              <span className='text-4xl  font-medium py-5 text-center italic'> Nutrindo Vidas</span>
              </div>
              <div className="flex justify-around gap-6">
              
                <button className='rounded-2xl bg-white text-lime-800  text-xl   font-bold py-4 px-8'>VEM PRA HORTA</button>
              
              </div>
         
            </div>
          </div>
        
        </div>

        <div className='bg-[#538d22] justify-center text-white py-5  flex gap-4 items-end'>

          
          <img src={Caixa} alt="" className='h-16'/>
          

  <h2 className='text-4xl font-normal'>Escolha sua   <span className='font-semibold text-[#EEBA0B]'>BOX</span></h2>
  <img src={Caixa} alt=""  className='h-16'/>
  {/* <img src={imageBoxes} alt="" className='' /> */}
</div>





<div className='grid grid-cols-4  text-center my-16 gap-4 mx-auto container text-white'>

  <div className='bg-[#538d22] flex flex-col   rounded-3xl  '>
    
    <div>
    <img src={Box1} alt="" className=' rounded-t-3xl' />
    </div>
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-xl  font-semibold'> BOX PEQUENA</h2>
    <p>Produtos selecionados da safra de Verão</p>
    <p>R$ 30,00 x 15 itens inclusos</p>
    <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Eu quero</button>
    </div>

  </div>

  <div className='bg-[#538d22] flex flex-col    rounded-3xl  '>
    
    <div>
    <img src={Box1} alt="" className=' rounded-t-3xl' />
    </div>
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-xl  font-semibold'> BOX MÉDIA</h2>
    <p>Produtos selecionados da safra de Verão</p>
    <p>R$ 45,00 x 25 itens inclusos</p>
    <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Eu quero</button>
    </div>

  </div>

  <div className='bg-[#538d22] flex flex-col    rounded-3xl  '>
    
    <div>
    <img src={Box1} alt="" className=' rounded-t-3xl' />
    </div>
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-xl  font-semibold'> BOX GRANDE</h2>
    <p>Produtos selecionados da safra de Verão</p>
    <p>R$ 55,00 x 35 itens inclusos</p>
    <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Eu quero</button>
    </div>

  </div>

  <div className='bg-[#538d22] flex flex-col    rounded-3xl  '>
    
    <div>
    <img src={Box1} alt="" className=' rounded-t-3xl' />
    </div>
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-xl  font-semibold'> BOX PERSONALIZADA</h2>
    <p>Produtos selecionados da safra de Verão</p>
    <p>R$ 75,00 x até 45 itens inclusos</p>
    <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Personalize</button>
    </div>

  </div>

</div>




<div className=' flex flex-col items-center gap-5 text-[#31572C]  '>
<h2 className='font-semibold text-5xl text-[#31572C]'>Como funciona o NutriBox?</h2>

<p className='text-3xl text-[#FB7F01] font-medium'> Faça a sua feira aqui e escolha alimentos de qualidade</p>
</div>


<div className='flex   bg-[#e9edc9]  p-16 mt-10 gap-10 rounded-s-full mb-10 ml-5 '>
<div className='rounded-xl'><img src={Cesta1} alt="" className='rounded-full' /></div>

<div className=' mx-auto my-auto flex flex-col items-center gap-6'>
  <h3 className='text-2xl text-center font-bold text-[#245501]'>O vem na minha BOX?</h3>
  <p className='text-xl text-center font-normal '>Nós selecionamos alimentos orgânicos direto de pequenos produtores.</p>
  <p className='text-xl text-center font-normal '>Você pode escolher uma cesta pronta com alimentos pré selecionados , ou pode personalizar de acordo com a sua preferência.</p>
  <p className='text-xl text-center font-normal '>Nós selecionamos os itens de acordo com a safra do mês para lhe proporcionar alimentos frecos e de qualidade.</p>
  <button className='bg-[#679436]  py-4 px-2 w-1/3 rounded-xl text-xl text-white hover:bg-[#FB7F01] hover:underline'>Faça sua feira</button>

</div>
</div>

<div className=' flex flex-col items-center gap-5 text-[#31572C] '>
<h2 className='font-semibold text-4xl text-[#31572C]'>Porque escolher o NutriBox?</h2>

<p className='text-3xl text-[#FB7F01] font-medium'>Compre alimentos sem agrotóxicos e contribua com a nossa causa</p>
</div>



<div className='flex  bg-[#e9edc9] p-16 mt-10 gap-10 rounded-e-full mb-10 ml-5 w-4/5'>


<div className=' mx-auto my-auto flex flex-col items-center gap-6'>
  <h3 className='text-2xl text-center font-bold text-[#245501]'>Comprando com a gente você está:</h3>
  <p className='text-xl text-center font-normal '>Ajudando na renda de pequenos produtores rurais.</p>
  <p className='text-xl text-center font-normal '>Contribuindo com a doação para ONGs que combatem a fome no mundo.</p>
  <p className='text-xl text-center font-normal '>Se alimentando com alimentos nutritivos e livres de agrotóxicos.</p>
  <button className='bg-[#679436]  py-4 px-2 w-1/3 rounded-xl text-xl text-white hover:bg-[#FB7F01] hover:underline'>Saiba mais</button>

</div>
<div className='rounded-xl '><img src={agricultor} alt="" className='rounded-full' /></div>
</div>
       
       

<div className='grid grid-cols-3 text-center my-16 gap-6 mx-auto container text-white'>

  <div>
  <div className='flex flex-col    rounded-3xl fundoHome2 w-full px-10 '>
    
    
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full my-auto text-xl  '>
    <h2 className='text-3xl  font-semibold uppercase text-[#FB7F01]'> VOCÊ NO CONTROLE</h2>
    <p>Faça o pedido da sua box direto pelo site e receba na mesa da sua casa</p>
    <p>Com apenas um CLIQUE você terá a sua feira da semana sem precisar sair de casa</p>
    <p>Nossos alimentos orgânicos te ajudará a manter uma alimentação saudável</p>
    <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Eu quero</button>
    </div>

  </div>

  </div>

  <div>
  <div className='flex flex-col    rounded-3xl fundoHome3 w-full px-10 '>
    
    
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full my-auto text-xl  '>
    <h2 className='text-3xl  font-semibold uppercase text-[#FB7F01]'>Aprenda como </h2>
    <p>Faça o pedido da sua box direto pelo site e receba na mesa da sua casa</p>
    <p>Com apenas um CLIQUE você terá a sua feira da semana sem precisar sair de casa</p>
    <p>Nossos alimentos orgânicos te ajudará a manter uma alimentação saudável</p>
    <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Eu quero</button>
    </div>

  </div>

  </div>

  <div>
  <div className='flex flex-col    rounded-3xl fundoHome3 w-full px-10 '>
    
    
<div className='gap-4 flex flex-col p-5 items-center justify-center h-full my-auto text-xl  '>
    <h2 className='text-3xl  font-semibold uppercase text-[#FB7F01]'>Aprenda como </h2>
    <p>Faça o pedido da sua box direto pelo site e receba na mesa da sua casa</p>
    <p>Com apenas um CLIQUE você terá a sua feira da semana sem precisar sair de casa</p>
    <p>Nossos alimentos orgânicos te ajudará a manter uma alimentação saudável</p>
    <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl'>Eu quero</button>
    </div>

  </div>

  </div>

</div>

       

          
      </>
    );
}

export default Home;