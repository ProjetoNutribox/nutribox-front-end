import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'> Nutribox</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Início</div>
              <div className='hover:underline'>Sobre nós</div>
              <div className='hover:underline'>Catálogo</div>
              <div className='hover:underline'>Minha Conta</div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar