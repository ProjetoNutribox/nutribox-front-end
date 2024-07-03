import React from 'react';
//import homeLogo from '../../asset'
import './Home.css';
//import logo2 from '../../assets/Logo2.png'


function Home() {
    return (
        <>
        <div className=" w-full  flex justify-center fundoHome">
          <div className='container grid grid-cols-2 text-white items-center justify-center'>

            <div>
            <div className="flex flex-col gap-4 items-center justify-center py-4">

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
            {/* <img src={logo2} alt="" className='my-auto h-50'/> */}
          </div>
        
        </div>
       
          
      </>
    );
}

export default Home;