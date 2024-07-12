import React, { useContext } from 'react'
import fotoPerfil from "../../assets/imagemPerfil.png"
import fotoUsuarioDefault from "../../assets/fotoUsuarioDefault.png"
import "./Perfil.css"
import { Navigate } from 'react-router-dom'
import ModalPerfil from '../../components/categorias/modalPerfil/ModalPerfil'
import Usuario from '../../models/Usuario';
import { AuthContext } from '../../contexts/AuthContexts'

function Perfil() {

    const { usuario } = useContext(AuthContext)

  return (
    <div className='bg-[#E9EDE5] flex justify-center m-auto py-20'>
        <div className='h-[1136px] w-[1092px] bg-[#F7F8F8] rounded-[40px] shadow-2xl p-9' >
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
                <h2 className='text-xl'></h2>
            </div>
            <hr />
            <div className='flex ml-[135px] w-[800px] my-12'>
                <h2 className=' mr-[auto] text-xl font-semibold'>assinaturas</h2>
                <h2 className='text-xl'></h2>
            </div>
            <hr className='mb-14' />
        <ModalPerfil />

        </div>
    </div>
  )
}

export default Perfil