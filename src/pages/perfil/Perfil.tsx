import React from 'react'
import fotoPerfil from "../../assets/imagemPerfil.png"
import fotoUsuarioDefault from "../../assets/fotoUsuarioDefault.png"
import "./Perfil.css"
import { Navigate } from 'react-router-dom'
import ModalPerfil from '../../components/categorias/modalPerfil/ModalPerfil'

function Perfil() {

    // let navigate = Navigate()

  return (
    <div className='bg-[#E9EDE5] flex justify-center m-auto py-20'>
        <div className='h-[1136px] w-[1092px] bg-[#F7F8F8] rounded-[40px] shadow-2xl p-9' >
            <div className='bg-cover h-[260px] w-full imagemFundo rounded-[90px]'>
            <div className='flex items-end gap-8'>
                <img className='w-60 h-60 ml-32 mt-32 shadow-md rounded-[30px]' src={fotoUsuarioDefault} alt="" />
                <h2 className='mb-9 text-2xl font-semibold'>Vinicius Belucci Rocha</h2>
            </div>
            </div>
            <div className='mt-[171px] mb-16 mx-[135px] text-2xl'>
            <h2>INFORMAÇÕES:</h2>
            </div>
            <div className='flex ml-[135px]  w-[800px] my-12'>
                <h2 className=' mr-[auto] text-xl font-semibold'>email:</h2>
                <h2 className='text-xl'>viniciusAlbuquerque@gmail.com</h2>
            </div>
            <hr />
            <div className='flex ml-[135px]  w-[800px] my-12'>
                <h2 className=' mr-[auto] text-xl font-semibold'>telefone:</h2>
                <h2 className='text-xl'>(11)87850-2022</h2>
            </div>
            <hr />
            <div className='flex ml-[135px] w-[800px] my-12'>
                <h2 className=' mr-[auto] text-xl font-semibold'>assinaturas</h2>
                <h2 className='text-xl'>5x caixas P</h2>
            </div>
            <hr className='mb-14' />
        <ModalPerfil />

        </div>
    </div>
  )
}

export default Perfil