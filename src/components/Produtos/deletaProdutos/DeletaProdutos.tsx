import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContexts'
import { buscar, deletar } from '../../../services/Service'
import Produto from '../../../models/Produto'
import { toastAlerta } from '../../../util/toastAlert'
import { Menu } from '@headlessui/react'
import { DotsThree } from '@phosphor-icons/react'



function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto)

  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')//chama o alert personalizado que está na pasta Util 
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Produto apagado com sucesso', 'sucesso')


    } catch (error) {
      toastAlerta('Erro ao apagar Produto', 'erro')

    }

    retornar()
  }
  return (
     
    <>
    <div className='container mx-auto'>

        <h1 className='text-4xl text-center my-4 p-10'>Deletar Produto</h1>
        <p className='text-center text-xl font-semibold mb-4'>Você tem certeza de que deseja apagar o Produto a seguir?</p>

    
    <div className="flex flex-col justify-center container mx-auto">
    <div className="container flex flex-col mx-auto w-1/3">
    <div className='flex flex-col'>
    <div className='grid   text-center my-16 gap-4 mx-auto container  rounded-3xl shadow-2xl'>
      <div className='bg-white flex flex-col   rounded-3xl  h-full relative'>

        <div className='w-full h-60  '>
          <img src={produto.foto} className=' rounded-t-3xl w-full h-full object-cover  'alt="" />
          </div>

          <div className='gap-4 flex flex-col p-5 items-center justify-center h-full'>

          <h2 className='text-2xl  font-semibold  bg-gradient-to-r from-[#538d22] to-[#FB7F01] bg-clip-text text-transparent'>{produto.nome}</h2>
          <p className='text-lg font-semibold uppercase'>{produto.categoria?.descricao}</p>
          <p>{produto.tamanho}</p>
          <p>R${produto.preco}</p>
          

        </div>

       
      </div>
      </div>
      
     
      </div>
      <div className="flex  gap-9">
         <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 rounded-2xl' onClick={retornar}>Não</button>
         <button className='w-full text-slate-100 bg-[#538d22] hover:bg-green-800 rounded-2xl' onClick={deletarProduto} >
        Sim
      </button>
      </div>
      </div>
      </div>
      </div>
    

    </>

  )
}

export default DeletarProduto