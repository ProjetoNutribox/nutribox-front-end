import React from 'react'
import './catalogo.css'
import fundocatalogo from './../../assets/fundo-catalogo.png'
import interrogacao from './../../assets/ponto-de-interrogacao.png'

function Catalogo() {
  return (
    <>
    <header>
        <div className=' fundoCatalogo '>
            
            {/* <div className='  ' >
<img src={fundocatalogo} alt="" className='rounded-full ' />

            </div> */}

            <div className='my-auto flex flex-col items-center p-64'>
              <h1 className='text-6xl text-[#FB8500] font-semibold text-center '>O que vem na minha BOX</h1>
            
            <img src={interrogacao} alt="" className='w-20 '/>
            </div>

            

 
            
        </div>


    </header>
    <div>
        

    </div>
    
    </>
    
  )
}

export default Catalogo