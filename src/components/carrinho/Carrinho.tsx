import React, { useContext, useEffect } from 'react'
import { CarrinhoContext } from '../../contexts/CarrinhoContext'
import { AuthContext } from '../../contexts/AuthContexts'
import { useNavigate } from 'react-router-dom'
import { toastAlerta } from '../../util/toastAlert'
import Produto from '../../models/Produto'
import { Trash } from '@phosphor-icons/react'


function Carrinho() {

const navigate = useNavigate()



const{adicionarItem, diminuirQuantidade, finalizarCompra, listaCarrinho, removerItem} = useContext(CarrinhoContext)

let soma = 0

listaCarrinho.map(item =>(
  soma = soma + (item.preco * item.qtd!)
))



const{usuario} = useContext(AuthContext)

useEffect(() => {
  
  }, [listaCarrinho.length])



useEffect(() => {
    if (usuario.token === "") {
      toastAlerta('Você precisa estar logado', 'info');
        navigate('/login');
        
    }
}, [usuario])



  return (
    <div className='container border rounded-2xl p-10 shadow-2xl mx-auto h-full flex flex-col items-center justify-center gap-10'>
      <div>
      <h1 className=' text-5xl justify-center'>Meu carrinho</h1>
      </div>
      <div>
      <p className='font-bold'>Produtos:</p>
      </div>
      <div className='p-36'>
      <div className='gap-8 justify-center items-center'>
      {listaCarrinho.map(item => (
        <>
        
        <p><span className='font-semibold'>{item.nome}</span></p>
       <div className='flex gap-8'>

        <p> quant: {item.qtd}</p>
        <button className='text-2xl ' onClick={() => diminuirQuantidade(item)}>-</button> 
            <button className='text-2xl' onClick={() => adicionarItem(item)}>+</button>
            <button onClick={() => removerItem(item)}>
         <Trash/>
          </button> 
       </div>


        </>
))}
      </div>
      <div className='p-20'>
      <p> <span className='font-bold'>Valor total da compra:</span> {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(soma)}</p>
      </div>
      
      </div>
      <div>
        <button className='border rounded-2xl p-3 bg-[#538d22] text-white' onClick={() => finalizarCompra()}>Finalizar compra</button>
      </div>
    </div>
  )
}

export default Carrinho