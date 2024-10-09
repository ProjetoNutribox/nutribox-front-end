import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'



import Produto from '../../../models/Produto';
import { DotsThree } from '@phosphor-icons/react';
import { Menu } from '@headlessui/react';
import { CarrinhoContext } from '../../../contexts/CarrinhoContext';

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({produto}: CardProdutoProps) {

  const{adicionarItem, listaCarrinho} = useContext(CarrinhoContext)

  useEffect(() => {
  console.log(listaCarrinho)

  }, [listaCarrinho.length])
  return (
    
    <>
    <div className='flex flex-col'>
    <div className='grid   text-center my-10 gap-4 mx-auto container  rounded-3xl shadow-2xl'>
      <div className='bg-white flex flex-col   rounded-3xl  h-full relative'>

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
                      to={`/editarProduto/${produto.id}`}
                      className={`p-2 w-full text-black ${active ? 'bg-[#FB7F01] text-white' : ' bg-[#EEBA0B] '} flex items-center justify-center`}
                    >
                      Editar
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to={`/deletarProduto/${produto.id}`}
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
          <img src={produto.foto} className=' rounded-t-3xl w-full h-full object-cover  'alt="" />
          </div>

          <div className='gap-4 flex flex-col p-5 items-center justify-center h-full'>

          <h2 className='text-2xl  font-semibold  bg-gradient-to-r from-[#538d22] to-[#FB7F01] bg-clip-text text-transparent'>{produto.nome}</h2>
          <p className='text-lg font-semibold uppercase'>{produto.categoria?.descricao}</p>
          <p>{produto.tamanho}</p>
          <p> {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(produto.preco)}</p>
          <button className='bg-[#FB7F01]  py-4 px-2 w-1/2 rounded-xl hover:bg-[#EEBA0B] text-white text-xl '> <span className='hover:shadow-black shadow-2xl' onClick={() => adicionarItem(produto)}>Comprar</span> </button>

        </div>

       
      </div>
      </div>
      
     
      </div>
    

    </>
  )
}

export default CardProduto