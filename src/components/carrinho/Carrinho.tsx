import React, { useContext, useEffect } from 'react'
import { CarrinhoContext } from '../../contexts/CarrinhoContext'
import { AuthContext } from '../../contexts/AuthContexts'
import { Link, useNavigate } from 'react-router-dom'
import { toastAlerta } from '../../util/toastAlert'
import { Trash } from '@phosphor-icons/react'
import { FaSeedling } from 'react-icons/fa'


function Carrinho() {

  const navigate = useNavigate()



  const { adicionarItem, diminuirQuantidade, finalizarCompra, listaCarrinho, removerItem } = useContext(CarrinhoContext)

  let soma = 0

  listaCarrinho.map(item => (
    soma = soma + (item.preco * item.qtd!)
    ))
    
    
    
    const { usuario } = useContext(AuthContext)
    
    useEffect(() => {
      
    }, [listaCarrinho.length])
    
    
    
    useEffect(() => {
      if (usuario.token === "") {
        toastAlerta('Você precisa estar logado', 'info');
        navigate('/login');
        
        }
        }, [usuario])
        
        
        
        return (
          <>
          <div className='container border p-6 md:p-9 shadow-2xl mx-auto h-full flex flex-col items-center justify-center mt-10 rounded-2xl'>
      <div>
        <h1 className='text-3xl md:text-5xl text-center'>Meu carrinho</h1>
      </div>
      <div className='flex flex-col md:flex-row p-6 md:p-12 w-full md:justify-between'>
        <div className='flex flex-col gap-8 items-start w-full md:w-[50vw]'>
          <p className='font-bold mb-6 text-xl'>Produtos:</p>
          {listaCarrinho.length ? listaCarrinho.map(item => (
            <div className='bg-slate-100 mb-6 p-5 flex flex-col md:flex-row justify-between items-center rounded-2xl w-full'>
              <div className='flex gap-5 items-center'>
                <img className='w-16 h-16 md:w-20 md:h-20 rounded-xl' src={item.foto} alt="foto do produto" />
                <p className='font-semibold'>{item.nome}</p>
              </div>
              <div className='flex gap-4 items-center mt-4 md:mt-0'>
                <button className='text-2xl' onClick={() => diminuirQuantidade(item)}>-</button>
                <p className='border px-3 border-cyan-900 rounded-md'>{item.qtd}</p>
                <button className='text-2xl' onClick={() => adicionarItem(item)}>+</button>
                <button onClick={() => removerItem(item)}>
                  <Trash />
                </button>
              </div>
            </div>
          )) : (
            <div className='bg-slate-100 mb-6 p-5 flex justify-between rounded-2xl w-full'>
              <div className='flex content-between items-center gap-4'>
                <FaSeedling />
                <p className='font-bold text-xl'>Carrinho Vazio</p>
                
              </div>
              <div>
                <Link to="/produtos">
                  <button className='border rounded-2xl p-3 bg-[#538d22] text-white'>Ir às compras</button>
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className='p-6 bg-slate-100 rounded-xl mb-4 flex flex-col mt-6 md:mt-0 md:ml-8 w-full md:w-auto'>
          <span className='font-semibold mb-4'>Valor total da compra:</span>
          <p className='font-bold'>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(soma)}</p>
          <div className='mt-6'>
            <button 
              disabled={listaCarrinho.length < 1} 
              className={`border rounded-2xl p-3 text-white m-auto w-full md:w-auto ${listaCarrinho.length < 1 ? 'bg-[#9cb08c]' : 'bg-[#538d22]'}`} 
              onClick={() => finalizarCompra(soma)}>
              {listaCarrinho.length < 1 ? 'Carrinho vazio' : 'Comprar'}
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Carrinho