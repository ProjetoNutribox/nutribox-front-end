import React from 'react'
import Categoria from '../../../models/Categoria'
import { Link } from 'react-router-dom'
import { Menu } from '@headlessui/react'
import { DotsThree } from '@phosphor-icons/react'

interface CardCategoriaProps{
    categoria: Categoria
    foto: string
}

function CardCategoria({categoria, foto}: CardCategoriaProps) {
  return (
    <>
   
    <div className='flex flex-col'>
    <div className='text-center my-10  mx-auto max-w-96 container text-white   '>
      <div className='bg-[#538d22] flex flex-col   rounded-3xl  h-full relative'>

      <div className="flex justify-end   absolute top-0 right-0">
          <Menu as="div" className="relative inline-block text-left bg-opacity-35 bg-white  rounded-full mx-4 my-4 text-white">
            <div className='flex items-center'>
              <Menu.Button>
                <DotsThree size={40} />
              </Menu.Button>
            </div>
            <Menu.Items
              className="overflow-hidden absolute right-0 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className='rounded-md'>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/editarCategoria/${categoria.id}`}
                      className={`p-2 w-full text-black ${active ? 'bg-[#FB7F01] text-white' : ' bg-[#EEBA0B] '} flex items-center justify-center`}
                    >
                      Editar
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/deletarCategoria/${categoria.id}`}
                      className={`p-2 w-full rounded text-black ${active ? 'bg-[#E03401] text-white' : ' bg-[#bc3908]'} flex  items-center justify-center`}
                    >
                      Deletar
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>
        </div>

        <div className='w-full h-60  '>
          <img src={foto} className=' rounded-t-3xl w-full h-full object-cover' alt="" />
        </div>
          
            <div className='gap-4 flex flex-col p-5 items-center justify-center h-full'>
          <h2 className='text-xl font-semibold '>{categoria.nome}</h2>
          <p className='text-lg font-semibold uppercase'>{categoria.descricao}</p>
        </div>

       
      </div>
      </div>
      
     
      </div>
    
    

    </>
  )
}

export default CardCategoria