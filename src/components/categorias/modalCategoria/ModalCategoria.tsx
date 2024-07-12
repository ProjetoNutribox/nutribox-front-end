import React, { useState } from 'react'
import FormularioCategoria from '../formularioCategoria/FormularioCategoria'
import Popup from 'reactjs-popup'
import './ModalCategoria.css'

function ModalCategoria() {
  return (
    <>
    <Popup  trigger={<button className='border rounded-xl px-9 ml-10 bg-gray-200 hover:bg-white hover:text-black'>Novo +</button>} modal>
        <div>
            <FormularioCategoria/>
        </div>
    </Popup>

    </>
  )
}

export default ModalCategoria