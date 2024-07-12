import React, { useContext, useEffect, useState } from 'react'
import Categoria from '../../../models/Categoria'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContexts'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../util/toastAlert'



function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const navigate = useNavigate()
  
    const {id} = useParams<{id: string}>()
  
    const{usuario, handleLogout} = useContext(AuthContext)
    const token = usuario.token
  
    async function buscarPorId(id: string) {
      try{
        await buscar(`/categorias/${id}`,setCategoria, {
          headers: {
            'Authorization': token
          }
        })
      } catch (error: any) {
        if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
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
    navigate("/categorias")
  }
  
  async function deletarCategoria() {
    try {
        await deletar(`/categorias/${id}`, {
            headers: {
                'Authorization': token
            }
        })
  
        toastAlerta('Categoria apagada com sucesso', 'sucesso')
        retornar()
  
    } catch (error: any) { 
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
    }else{
      toastAlerta('Erro ao apagar a Categoria', 'erro')
  
    }
    
    }
  
    retornar()
  }



  return (
   
    <div className='container mx-auto'>

        <h1 className='text-4xl text-center my-4 p-10'>Deletar Categoria</h1>
        <p className='text-center text-xl font-semibold mb-4'>Você tem certeza de que deseja apagar a Categoria a seguir?</p>

    
        <div className='flex flex-col'>
    <div className='text-center my-16  mx-auto w-96 container text-white   '>
      <div className='bg-[#538d22] flex flex-col  mb-10 rounded-3xl  h-full relative'>


        <div className='w-full h-60  '>
          <img src='https://i.ibb.co/M6TRbrz/box-outono.jpg' className=' rounded-t-3xl w-full h-full object-cover' alt="" />
        </div>
          
            <div className='gap-4 flex flex-col p-5 items-center justify-center h-full'>
          <h2 className='text-xl font-semibold '>{categoria.nome}</h2>
          <p className='text-lg font-semibold uppercase'>{categoria.descricao}</p>
        </div>
     
      </div>
      <div className="flex gap-9">
         <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 rounded-2xl' onClick={retornar}>Não</button>
         <button className='w-full text-slate-100 bg-[#538d22] hover:bg-green-800 rounded-2xl' onClick={deletarCategoria} >
        Sim
      </button>
      </div>
      </div>
      </div>
      </div>
      

    
  )
}

export default DeletarCategoria