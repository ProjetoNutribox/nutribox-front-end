import React, { useContext, useEffect } from 'react'
import { CarrinhoContext } from '../../contexts/CarrinhoContext'
import { AuthContext } from '../../contexts/AuthContexts'
import { Link, useNavigate } from 'react-router-dom'
import { toastAlerta } from '../../util/toastAlert'
import { Trash } from '@phosphor-icons/react'
import { FaSeedling } from 'react-icons/fa'


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
    <div className='container border p-9 shadow-2xl mx-auto h-full flex flex-col items-center justify-center mt-20 rounded-2xl '>
      <div>
        <h1 className=' text-5xl justify-center'>Meu carrinho</h1>
      </div>
      <div className='p-12 flex justify-end '>
        <div className='gap-8 items-center flex-col w-[50vw]'>
          <p className='font-bold mb-6 text-xl'>Produtos:</p>
          {listaCarrinho.length ? listaCarrinho.map(item => (
            <div className='bg-slate-100 mb-9 p-5 flex justify-between items-center rounded-2xl'>
              <div className='flex gap-10 items-center'>
                <img className=' w-20 h-20  flex rounded-xl' src={item.foto} alt="foto do produto"/>
                <p className='font-semibold flex'>{item.nome}</p>
              </div>
        <div className='flex gap-8 my-auto justify-end'>
          <button className='text-2xl' onClick={() => diminuirQuantidade(item)}>-</button> 
              <p className='border px-3 mt-2 border-cyan-900 rounded-md'>{item.qtd}</p>
              <button className='text-2xl' onClick={() => adicionarItem(item)}>+</button>
              <button onClick={() => removerItem(item)}>
                <div>
                  <Trash />
                </div>
            </button> 
        </div>
       </div>
       
)) : (
  <div className='bg-slate-100 mb-9 p-5 flex justify-between rounded-2xl'>
    <div className=' flex content-between items-center gap-7'>
      <FaSeedling />
      <p className='font-bold text-xl'>Carrinho Vazio</p>
      <FaSeedling />
    </div>
    <div>
    <Link to={"/produtos"}><button className='border rounded-2xl p-3 bg-[#538d22] text-white'>Ir as compras</button></Link>
    </div>
  </div>
)}

      </div>
      <div className='p-7 bg-slate-100 ml-8 rounded-xl mb-4 flex flex-col mt-12 content-center h-72'>
        <span className='font-semibold mb-4'>Valor total da compra:</span> 
          <p className='font-bold'> {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(soma)}</p>
        <div className='mt-32'>
          {listaCarrinho.length < 1 ? (<button disabled={true} className='border rounded-2xl bg-[#9cb08c] p-3 text-white m-auto w-[300px]' onClick={() => finalizarCompra()}>Carrinho vazio</button>) : 
          <button disabled={false} className='border rounded-2xl p-3 bg-[#538d22] text-white w-[200px] ' onClick={() => finalizarCompra()}>Comprar</button>}
        </div>
      </div>
      
      </div>
      <div>
      </div>
    </div>
  )
}

export default Carrinho