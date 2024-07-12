import React from 'react'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup'
import './ModalProduto.css'
import FormularioProduto from '../formularioProduto/FormularioProduto'

function ModalProduto() {
  return (
    <>
    <Popup trigger={<button className='border rounded-xl px-8 bg-gray-200 hover:bg-white hover:text-black'>Novo +</button>} modal>
        <div>
            <FormularioProduto/>
        </div>
    </Popup>

    </>
  )
}

export default ModalProduto