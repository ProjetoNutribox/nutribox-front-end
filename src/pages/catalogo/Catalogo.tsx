import React from 'react'
import './catalogo.css'

import MiniBox from '../../assets/MiniBox.png'
import MediaBox from '../../assets/MediaBox.png'
import BigBox from '../../assets/BigBox.png'
import BoxPersonalizada from '../../assets/BoxPersonalizadaa.png'
import Slider from 'react-slick';
//import BoxFundoCatalogo from '../../assets/Box-fundo-catalogo.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'flex', 
        borderRadius: '50%', 
        width: 'auto',
        height: 'auto',
        opacity: 0.5,
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1 ,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'flex', 
        borderRadius: '50%', 
        width: 'auto',
        height: 'auto',
        opacity: 0.5,
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1 ,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onClick={onClick}
    />
  );
}



function Catalogo() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
  <header>

  <div className=' fundoHeaderCatalogo   h-[60vh] '>
 

    <div className='justify-center  my-auto  items-center pt-40 '>
      <div className='flex flex-col gap-4 text-white text-center my-auto'>
      <h1 className='text-4xl md:text-5xl lg:text-5xl font-medium leading-relaxed'>Escolha a BOX que melhor combina com você</h1>
      <button className='text-xl md:text-xl lg:text-2xl bg-amber-400 rounded-3xl py-3 px-5 w-3/4 sm:w-1/2 mx-auto hover:bg-orange-500'><a href="#estacoes">Nossas box são vendidas de acordo com a safra </a></button>

      </div>

     
      
    </div>
  </div>
</header>



  <div className='container mx-auto'>
  <h1 className='font-medium text-center text-3xl md:text-5xl lg:text-5xl my-20  md:my-10 lg:my-11 bg-[#CBE484] w-fit mx-auto px-6 md:px-8 py-2  rounded-2xl'>
  Qual faz seu tipo ? 
  </h1>
  </div>


  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center my-16 gap-10 mx-auto container  my-div sm:px-4'>

    <div className='bg-[#f1faee] flex flex-col   rounded-3xl shadow-neutral-500 shadow-2xl'>
         <div><img src={MiniBox} alt="" className=' rounded-t-3xl w-full h-60 md:h-80 object-cover' /></div> 

        <div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-3xl  font-semibold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'> MINI BOX</h2>
    <p>Box tamanho pequeno.<br/>
    Perfeita para experimentar uma variedade de frutas e legumes frescos em pequenas quantidades.</p>
   <Link to='/produtos' className='bg-[#EEBA0B] py-4 px-2 w-1/2 rounded-xl hover:bg-lime-700 hover:underline text-white font-medium text-lg md:text-xl'> <button > Eu quero</button></Link>
    </div>
    
    </div>

    <div className='bg-[#f1faee] flex flex-col   rounded-3xl shadow-neutral-500 shadow-2xl'>
        <div><img src={BigBox} alt="" className=' rounded-t-3xl  w-full h-80 object-cover' /></div> 

        <div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-3xl  font-semibold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'> BIG BOX</h2>
    <p>Box tamanho grande.<br/>
    
Caixa mais completa para aqueles que adoram ter uma abundância de frutas e legumes frescos e deliciosos sempre à disposição.</p>
  <Link to='/produtos' className='bg-[#d00000]   py-4 px-2 w-1/2 rounded-xl hover:bg-lime-700 hover:underline text-white font-medium text-xl'> <button > Eu quero</button></Link>

    </div>
    
    </div>

    <div className='bg-[#f1faee] flex flex-col   rounded-3xl shadow-neutral-500 shadow-2xl'>
         <div><img src={MediaBox} alt="" className=' rounded-t-3xl  w-full h-80 object-cover' /></div>

        <div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-3xl  font-semibold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'> MÉDIA BOX</h2>
    <p>Box tamanho médio.<br/>
Caixa ideal para quem deseja manter uma seleção e quantidades suficientes para satisfazer a todos com sabor e variedade.</p>
    <Link to='/produtos' className='bg-[#EB4901]    py-4 px-2 w-1/2 rounded-xl hover:bg-lime-700 hover:underline text-white font-medium text-xl'> <button > Eu quero</button></Link>

    
    </div>
    
    </div>
  </div>


  <div className='responsive-div grid grid-cols-1 md:grid-cols-2 text-center my-16 gap-10 mx-auto container bg-[#e0edc5] shadow-neutral-400 shadow-lg rounded-3xl p-2 md:p-14'>

<div className='px-2 rounded-3xl items-center justify-center my-auto flex flex-col'>

<p className='mt-10 text-center responsive-paragraph font-semibold leading-relaxed text-[#134611]'>
    <span className='responsive-heading font-bold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'>OLHA QUE LEGAL!!</span>
    <br />Em poucos dias teremos um lançamento de uma
    <span className='font-bold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'> NOVA BOX</span>
</p>

<p className='mt-10 text-center responsive-paragraph font-semibold leading-relaxed text-[#134611]'>
    <span className='font-bold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'>Em breve </span>
    você terá a oportunidade de montar sua própria Box e escolher seus alimentos de acordo com as suas necessidades.
</p>

<p className='mt-10 text-center responsive-paragraph font-semibold leading-relaxed text-[#134611]'>
    Na <span className='font-bold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'>Box personalizada</span> você poderá escolher frutas e legumes diretamente da horta.
</p>

</div>

<div className='bg-[#f1faee] flex flex-col rounded-3xl shadow-neutral-500 shadow-2xl'>
    <div><img src={BoxPersonalizada} alt="" className='rounded-t-3xl w-full h-80 object-cover' /></div>
    <div className='gap-4 flex flex-col p-5 items-center justify-center h-full'>
        <h2 className='responsive-heading font-semibold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'>BOX PERSONALIZADA</h2>
        <p className='responsive-paragraph'>Box personalizada de acordo com sua preferência e escolha.</p>
        <button className='bg-[#d00000] py-4 px-2 w-1/2 rounded-xl text-[#FFF616] font-medium text-lg md:text-xl'>EM BREVE</button>
    </div>
</div>

</div>




{/* carrossel */}

<div className='relative container mx-auto px-4 ' id='estacoes'>
<Slider {...settings} >

    



<div className=' container mx-auto my-10 rounded-3xl fundoCardPrimavera2  shadow-slate-500 shadow-lg  p-5 md:p-10 '>
  

<div className='leading-relaxed flex flex-col gap-5 text-center mx-auto my-auto text-lg md:text-2xl p-5 md:p-10'>

    <h3 className='text-yellow-500 text-2xl md:text-4xl font-bold'>BOX PRIMAVERA</h3>
        <p className='text-white'> Aproveite a diversidade e o frescor das frutas desta estação, como os morangos suculentos e os maracujás aromáticos. A primavera é o momento perfeito para renovar suas energias com alimentos leves e refrescantes.</p>
  
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
        <div className='p-5 md:p-10 text-center rounded-3xl bg-[#4f772d]'>
        <h4 className='text-xl md:text-3xl rounded-3xl p-1 my-5 text-[#f77f00] font-semibold'>Algumas frutas da safra da Primavera</h4>  
  
  <div className='grid grid-cols-2 mx-auto text-white font-normal  '>

 <ul>
  <li>Abacate</li>
  <li>Abacaxi</li>
  <li>Acerola</li>
  <li>Ameixa</li>
  <li>Amora</li>
  <li>Banana</li>
  <li>Mexerica</li>
  
  </ul>

  <ul>
  <li>Jabuticaba</li>
  <li>Morango</li>
  <li>Coco</li>
  <li>Laranja</li>
  <li>Mamão</li>
  <li>Manga</li>
  <li>Maracujá</li>
  </ul>
  </div>


</div>

<div className=' p-5 md:p-10 text-center rounded-3xl bg-[#4f772d]'>
<h4 className='text-xl md:text-3xl rounded-3xl p-1 my-5 text-[#f77f00] font-semibold'> Alguns legumes da safra da Primavera</h4>
  <div className=' grid grid-cols-2 mx-auto  text-white font-normal'>

 <ul>
<li>Abóbora</li>
<li>Batata-doce</li>
<li>Berinjela</li>
<li>Beterraba</li>
<li>Brócolis</li>
<li>Cenoura</li>
<li>Couve</li>

</ul>
<ul>
<li>Couve-flor</li>
<li>Espinafre</li>
<li>Pepino</li>
<li>Pimentão</li>
<li>Tomate</li>
<li>Rúcula</li>
<li>Cogumelo</li>
</ul>
</div>
</div>

</div>

  </div>
  
</div>

<div className='container mx-auto my-10 rounded-3xl fundoCardVerao shadow-slate-500 shadow-lg  p-5 md:p-10 '>
  <div className='leading-relaxed flex flex-col gap-5 text-center mx-auto my-auto text-lg md:text-2xl p-5 md:p-10'>
    <h3 className='text-yellow-500 text-2xl md:text-4xl font-bold'>BOX VERÃO</h3>
    <p className='text-white'> Refresque-se com as frutas  e legumes mais saborosos e nutritivos da estação mais quente do ano. Mangas doces, abacaxis suculentos e uvas refrescantes são ideais para criar sobremesas leves e saudáveis, perfeitas para os dias ensolarados.</p>
  
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
    <div className='p-5 md:p-10 text-center rounded-3xl bg-[#4f772d]'>
    <h4 className='text-xl md:text-3xl rounded-3xl p-1 my-5 text-[#f77f00] font-semibold'> Algumas frutas da safra do Verão</h4>
  
  
    <div className='grid grid-cols-2 mx-auto text-white font-normal  '>

 <ul>
  <li>Abacate</li>
  <li>Abacaxi</li>
  <li>Melancia</li>
  <li>Uva</li>
  <li>Manga</li>
  <li>Banana-prata</li>
  <li>Carambola</li>
  </ul>
  <ul>
  <li>Cereja</li>
  <li>Coco verde</li>
  <li>Cupuaçu</li>
  <li>Damasco</li>
  <li>Figo</li>
  <li>Framboesa</li>
  <li>Fruta do conde</li>
  </ul>
  </div>


</div>

<div className='p-5 md:p-10 text-center rounded-3xl bg-[#4f772d]'>
<h4 className='text-xl md:text-3xl rounded-3xl p-1 my-5 text-[#f77f00] font-semibold'> Alguns legumes da safra do Verão</h4>
<div className=' grid grid-cols-2 mx-auto text-white font-normal'>

 <ul>
  <li>Beterraba</li>
  <li>Pimentão</li>
  <li>Quiabo</li>
  <li>Abóbora</li>
  <li>Abobrinha</li>
  <li>Tomate</li>
  <li>Pepino</li>
  </ul>
  <ul>
  <li>Almeirão</li>
  <li>Chicória</li>
  <li>Escarola</li>
  <li>Espinafre</li>
  <li>Repolho</li>
  <li>Rúcula</li>
  <li>Cebolinha</li>
  </ul>

</div>
</div>

</div>

  </div>
</div>

<div className=' container mx-auto my-10 rounded-3xl fundoCardOutono shadow-slate-500 shadow-lg  p-5 md:p-10 '>
<div className='leading-relaxed flex flex-col gap-5 text-center mx-auto my-auto text-lg md:text-2xl p-5 md:p-10'>
<h3 className='text-yellow-500 text-2xl md:text-4xl font-bold'>BOX OUTONO</h3>
    <p className='text-white'> Aprecie a abundância e a variedade das frutas e legumes do outono, como maçãs crocantes e figos doces. Esta estação é excelente para desfrutar de frutas que trazem conforto e calor, ideais para receitas e lanches saudáveis.</p>
  
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
    <div className='p-5 md:p-10 text-center rounded-3xl bg-[#4f772d]'>
  <h4 className='text-xl md:text-3xl rounded-3xl p-1 my-5 text-[#f77f00] font-semibold'> Algumas frutas da safra do Outono</h4>
  
  
  <div className=' grid grid-cols-2 mx-auto text-white font-normal'>
 <ul>
  <li>Caqui</li>
  <li>Coco</li>
  <li>Figo</li>
  <li>Graviola</li>
  <li>Kiwi</li>
  <li>Mamão</li>
  <li>Manga</li>
  </ul>

  <ul>
  <li>Pera</li>
  <li>Tangerina</li>
  <li>Banana</li>
  <li>Goiaba</li>
  <li>Maçã</li>
  <li>Uva</li>
  <li>Laranja</li>
  </ul>
  </div>


</div>

<div className=' p-5 md:p-10 text-center rounded-3xl bg-[#4f772d]'>
<h4 className='text-xl md:text-3xl rounded-3xl p-1 my-5 text-[#f77f00] font-semibold'>Alguns legumes da safra do Outono</h4>
<div className=' grid grid-cols-2 mx-auto gap-1 text-white font-normal'>

 <ul>
  <li>Abóbora</li>
  <li>Abobrinha</li>
  <li>Berinjela</li>
  <li>Beterraba</li>
  <li>Cenoura</li>
  <li>Chuchu</li>
  </ul>
  <ul>
  <li>Inhame</li>
  <li>Mandioca</li>
  <li>Milho-verde</li>
  <li>Palmito</li>
  <li>Rabanete</li>
  <li>Tomate</li>
  </ul>

</div>
</div>

</div>

  </div>
</div>


<div className=' container mx-auto my-10 rounded-3xl fundoCardInverno shadow-slate-500 shadow-lg  p-5 md:p-10 '>
<div className='leading-relaxed flex flex-col gap-5 text-center mx-auto my-auto text-lg md:text-2xl p-5 md:p-10'>
    <h3 className='text-yellow-500 text-2xl md:text-4xl font-bold'>BOX INVERNO</h3>
    <p className='text-white'>Desfrute de frutas ricas em vitaminas C e nutrientes que ajudam a fortalecer o sistema imunológico nos dias mais frios. A laranja e a mexirica, por exemplo, são excelentes fontes de vitamina C, enquanto o abacate oferece gorduras saudáveis para sua dieta.</p>
  
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
    <div className='p-5 md:p-10 text-center rounded-3xl bg-[#4f772d]'>
  <h4 className='text-xl md:text-3xl rounded-3xl p-1 my-5 text-[#f77f00] font-semibold'>Algumas frutas da safra do Inverno</h4>
  
  
  <div className=' grid grid-cols-2 mx-auto text-white font-normal'>

 <ul>
  <li>Laranja-lima</li>
  <li>Mexirica</li>
  <li>Kiwi</li>
  <li>Lima da Pérsia</li>
  <li>Sapoti</li>
  <li>Pera</li>
  <li>Maçã</li>
  </ul>
  
  <ul>
  <li>Morango</li>
  <li>Mamão</li>
  <li>Carambola</li>
  <li>Abacate</li>
  <li>Ameixa</li>
  <li>Caqui</li>
  <li>Jaca</li>
  </ul>
  </div>


</div>

<div className='p-5 md:p-10 text-center rounded-3xl bg-[#4f772d]'>
<h4 className='text-xl md:text-3xl rounded-3xl p-1 my-5 text-[#f77f00] font-semibold'>Alguns legumes da safra do Inverno</h4>
<div className=' grid grid-cols-2 mx-auto text-white font-normal'>

<ul>
  <li>Abóbora</li>
  <li>Abobrinha</li>
  <li>Berinjela</li>
  <li>Beterraba</li>
  <li>Cenoura</li>
  <li>Chuchu</li>
  </ul>
  <ul>
  <li>Inhame</li>
  <li>Mandioca</li>
  <li>Milho-verde</li>
  <li>Palmito</li>
  <li>Rabanete</li>
  <li>Tomate</li>
  </ul>
</div>
</div>

</div>

  </div>
</div>
</Slider>
</div>


    
    
    </>
    
  )
}

export default Catalogo