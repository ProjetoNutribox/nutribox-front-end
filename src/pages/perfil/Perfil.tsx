import React, { useContext } from 'react'
import "./Perfil.css"
import ModalPerfil from '../../components/categorias/modalPerfil/ModalPerfil'
import { AuthContext } from '../../contexts/AuthContexts'
import { CarrinhoContext } from '../../contexts/CarrinhoContext'

function Perfil() {

    const { usuario } = useContext(AuthContext)
    const { historicoCompra } = useContext(CarrinhoContext)
    return (
        <div className='bg-[#E9EDE5] flex justify-center m-auto py-20'>
      <div className='w-full max-w-[1092px] bg-[#F7F8F8] rounded-[40px] shadow-2xl p-6 md:p-9'>
        <div className='bg-cover h-[260px] w-full flex items-center justify-center md:justify-start imagemFundo rounded-[40px]'>
          <div className='flex flex-col md:flex-row items-end gap-8'>
            <img className='w-48 h-48 md:w-60 md:h-60 ml-4 mt-4 shadow-md rounded-[30px]' src={usuario.foto} alt={usuario.nome} />
            <h2 className='mb-4 text-2xl font-semibold text-center md:text-left'>{usuario.nome}</h2>
          </div>
        </div>
        <div className='mt-8 mb-6 mx-4 text-2xl text-center md:text-left'>
          <h2>INFORMAÇÕES:</h2>
        </div>
        <div className='flex flex-col md:flex-row mx-4 md:w-[800px] my-6'>
          <h2 className='mr-auto text-xl font-semibold'>Email:</h2>
          <h2 className='text-xl'>{usuario.email}</h2>
        </div>
        <hr />
        <div className='flex flex-col md:flex-row mx-4 md:w-[800px] my-6'>
          <h2 className='mr-auto text-xl font-semibold'>Telefone:</h2>
          <h2 className='text-xl'>(11)97070-2022</h2>
        </div>
        <hr />
        <div className='mx-4 md:w-[800px] my-6'>
          <h2 className='mr-auto text-xl font-semibold mb-4'>Histórico:</h2>
          {historicoCompra.map(item => (
            <div
              key={item.id}
              className={`flex justify-between gap-8 p-3 rounded-md ${item.id % 2 !== 0 ? 'bg-[#9cb08c]' : 'bg-[#f0f0f0]'}`}
            >
              <p>Compra realizada: {new Intl.DateTimeFormat("en-US").format(item.data)}</p>
              <p>Preço total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.soma)}</p>
            </div>
          ))}
        </div>
        <hr className='mb-6' />
        <ModalPerfil />
      </div>
    </div>
    )
}

export default Perfil