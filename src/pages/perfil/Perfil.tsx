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
            <div className='h-auto w-[1092px] bg-[#F7F8F8] rounded-[40px] shadow-2xl p-9' >
                <div className='bg-cover h-[260px] w-full imagemFundo rounded-[90px]'>
                    <div className='flex items-end gap-8'>
                        <img className='w-60 h-60 ml-32 mt-32 shadow-md rounded-[30px]' src={usuario.foto} alt="" />
                        <h2 className='mb-9 text-2xl font-semibold'>{usuario.nome}</h2>
                    </div>
                </div>
                <div className='mt-[171px] mb-16 mx-[135px] text-2xl'>
                    <h2>INFORMAÇÕES:</h2>
                </div>
                <div className='flex ml-[135px]  w-[800px] my-12'>
                    <h2 className=' mr-[auto] text-xl font-semibold'>email:</h2>
                    <h2 className='text-xl'>{usuario.email}</h2>
                </div>
                <hr />
                <div className='flex ml-[135px]  w-[800px] my-12'>
                    <h2 className=' mr-[auto] text-xl font-semibold'>telefone:</h2>
                    <h2 className='text-xl'>(11)97070-2022</h2>
                </div>
                <hr />
                <div className='ml-[135px] w-[800px] my-12'>
                    <h2 className=' mr-[auto] text-xl font-semibold mb-10'>histórico:</h2>
                    {historicoCompra.map(item => (
                        item.id % 2 != 0 ? (<div className='flex gap-8 bg-[#9cb08c] p-3 rounded-md'>
                            <p>Compra realizada: {new Intl.DateTimeFormat("en-US").format(item.data)}</p>
                            <p>Preço total: {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(item.soma)}</p>
                        </div>) : (<div className='flex gap-8 p-3 rounded-md'>
                            <p>Compra realizada: {new Intl.DateTimeFormat("en-US").format(item.data)}</p>
                            <p>Preço total: {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(item.soma)}</p>
                        </div>)
                    ))} 
                    <h2 className='text-xl'></h2>
                </div>
                <hr className='mb-14' />
                <ModalPerfil />

            </div>
        </div>
    )
}

export default Perfil