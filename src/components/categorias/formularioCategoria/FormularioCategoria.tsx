import React, { ChangeEvent, useContext, useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContexts';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlert';
import Categoria from '../../../models/Categoria';

function FormularioCategoria() {

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const navigate = useNavigate();

    const {id} = useParams<{id: string}>()

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            }
        })
    }

    useEffect(() =>{
        if(id !== undefined){
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value

            
        })
        console.log(JSON.stringify(categoria))
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
    
        if (id !== undefined) {
          try {
            await atualizar(`/categorias`, categoria, setCategoria, {
              headers: {
                Authorization : token
              }
            })
    
            toastAlerta('Categoria atualizada com sucesso', 'sucesso')
            retornar()
    
          } catch (error: any) {
            if (error.toString().includes('403')) {
              toastAlerta('O token expirou, favor logar novamente', 'info')
              handleLogout()
            } else {
              toastAlerta('Erro ao atualizar o Tema', 'erro')
            }
    
          }
    
        } else {
          try {
            await cadastrar(`/categorias`, categoria, setCategoria, {
              headers: {
                Authorization : token
              }
              
            })

            toastAlerta('Categoria cadastrada com sucesso', 'sucesso')
            retornar()
    
          } catch (error: any) {
            if (error.toString().includes('403')) {
              toastAlerta('O token expirou, favor logar novamente', 'info')
              handleLogout()
            } else {
              toastAlerta('Erro ao cadastrar Categoria', 'erro')
            }
          }
        }
    
       buscarCategorias()
      }
    
      function retornar() {
        navigate("/categorias")
      }

      
    useEffect(() => {
        if (token === '') {
          toastAlerta('Você precisa estar logado', 'info');
          navigate('/login');
        }
      }, [token]);

      async function buscarCategorias() {
        try {
          await buscar('/categorias', setCategorias, {
            headers: { Authorization: token },
          });
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
            handleLogout()
          }
        }
      }




  return (
    <>
    <div className='container flex flex-col items-center justify-center mx-auto'>
        <h1 className='text-4xl text-center my-8'> 
            {id === undefined ? 'Cadastrar uma nova Categoria' : 'Editar Categoria'}</h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
            <div className='flex flex-col gap-2'>
                <label htmlFor="nome">Nome da Categoria</label>
                <input 
                type="text" 
                 className='border-2 border-slate-700 rounded p-2' 
                 name="nome"
                 value={categoria.nome}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                 <label htmlFor="descricao">Descrição</label>
                <input 
                type="text" 
                 className='border-2 border-slate-700 rounded p-2' 
                 name="descricao"
                 value={categoria.descricao}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
            </div>
            <button className='rounded text-slate-100 bg-[#457D00]
             hover:bg-[#FB7F01] w-1/2 py-2 mx-auto block' type='submit'>
                {id === undefined ? 'Cadastrar' : 'Editar' }</button>
        </form>
    </div>
    </>
  )
}

export default FormularioCategoria