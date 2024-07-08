import React from 'react'
import imageValoresAgricultura from "../../assets/imagemValores.jpg"
import iconeValoresAgricultura from "../../assets/iconeValores.png"

function CardValores() {
  return (
    <div className='flex flex-col w-72 h-96 bg-[#FFFFFF] gap-4 rounded-xl shadow-md '>
    <img className='rounded-t-xl' src={imageValoresAgricultura} alt="" />
    <div className=' flex items-center gap-2 mx-auto'>
      <h2>Agricultura</h2>
      <img className=' w-8 h-8 ' src={iconeValoresAgricultura} alt="" />
    </div>
    <div className=' mx-10'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
  </div>
  )
}

export default CardValores