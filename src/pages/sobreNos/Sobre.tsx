import React from 'react'
import imageHeaderSobre from "../../assets/image-sobre.png"
import fazendeiro from "../../assets/fazendeiro-page-sobre.png"
import CardValores from '../../components/valores/CardValores'

function Sobre() {
  return (
    <>
    <header className='bg-[#C1CF84] shadow-md'>
      <div className='flex items-center justify-center gap-96 w-full h-[336px]' >
        <h1 className='mx-auto my-auto flex flex-col items-center text-5xl font-semibold '>Nutrindo <br /> <span className=' text-6xl font-bold text-[#EB4901] '>Vidas</span></h1>
        <img className='absolute w-[550px] mr-28 top-32' src={imageHeaderSobre} alt="foto com muitas frutas orgânicas" />
        <h1 className='mx-auto my-auto flex flex-col items-center text-5xl font-semibold' >Plantando <br /> <span className=' text-6xl font-bold text-[#EB4901]' >Esperança</span></h1>
      </div>
    </header>
    <main className='bg-[F7F8F8]'>
      <div className='flex justify-center'>
        <div className=' bg-[#FFFFFF] flex justify-around mt-[176px] mb-[81px] rounded-3xl w-[1010px] h-[397px] drop-shadow-2xl'>
          <div className='flex'>
            <div className='flex flex-col items-start	text-4xl p-14 gap-8'>
              <h2 className='text-2xl text-black'>Como funciona</h2>
              <p className='text-xl text-black'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Ullam doloremque suscipit quasi, accusamus enim totam nemo 
              </p>
              <button  type='submit' className="rounded-md color-button   bg-[#EB4901]  w-72 py-4 flex justify-center text-xl font-semibold mx-auto text-[#FFFFFF] hover:bg-[#FB7F01]">VEM PRA HORTA</button>
            </div>
            <img className="w-[487px] h-[396px]" src={fazendeiro} alt="fazendeiro carregando frutas orgânicas" />
          </div>
        </div>
      </div>
      <div className='bg-[#C1CF84] h-[217px] w-full p-9 mb-80 flex place-content-between	'>
        <CardValores />
        <CardValores />
        <CardValores />
        <CardValores />
      </div>
      <div className='h-[40vw] bg-[#C1CF84] mb-24 flex mx-9 rounded-xl'>
      <iframe className='h-full w-[800px]' src="https://www.youtube.com/embed/0bL-DPSMhPw?si=EIfYI9TxlqrTstJG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className=' flex flex-col w-[558px] my-auto mx-8 '>
        <h2 className='font-semibold text-4xl mb-14'>AQUI VAI SER UM VIDEO</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sequi incidunt pariatur praesentium explicabo impedit nemo nulla deserunt numquam eos eaque commodi, in recusandae similique facilis sed! Dolorem, cupiditate doloremque!</p>
      </div>
      </div>
    </main>
  </>
  )
}

export default Sobre