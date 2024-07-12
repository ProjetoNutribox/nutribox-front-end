import React from 'react'
import './catalogo.css'
//import BoxPrimavera from '../../assets/BoxPrimavera.png'
//import BoxVerao from '../../assets/BoxVerão.png'
//import BoxOutono from '../../assets/BoxOutono.png'
//import MiniBox from '../../assets/MiniBox.png'
//import Box1 from '../../assets/Box1.png'
//import BigBox from '../../assets/BigBox.png'
import BoxPersonalizada from '../../assets/BoxPersonalizadaa.png'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ 
        ...style, 
        display: 'block', 
        background: '#000', 
        borderRadius: '50%', 
        padding: '30px', 
        opacity: 0.5,
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1 ,
        //fontSize:'100px'
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
        display: 'block', 
        background: '#000', 
        borderRadius: '50%', 
        padding: '30px', 
        opacity: 0.5,
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        zIndex: 1 
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
        <div className='bg-[#CBE484] fundoCatalogo  '>
            


            <div className='my-auto flex flex-col items-center p-10 '>
              <h1 className='text-6xl text-[#FB8500] font-semibold text-center '>Box das estações</h1>
              <p className='text-3xl'>Nós selecionamos produtos orgânicos de acordo com as estações</p>
        
<div className='grid grid-cols-4 container gap-10 text-[#538D22]'>

  <div className='flex flex-col items-center py-10 gap-2 '>
    <div>
      {/* <img src={BoxPrimavera} alt="" /> */}
    </div>
    <div>
      <button className='bg-white p-2 px-10  rounded-2xl text-xl font-semibold'>Box <br />PRIMAVERA
      </button>
    </div>
  </div>

  <div className='flex flex-col items-center py-10 gap-2'>
    <div>
      {/* <img src={BoxVerao} alt="" /> */}
    </div>
    <div>
      <button className='bg-white p-2 px-14 rounded-2xl text-xl font-semibold  '>Box <br />VERÃO
      </button>
    </div>
  </div>

  <div className='flex flex-col items-center py-10 gap-2'>
    <div>
      {/* <img src={BoxOutono} alt="" /> */}
    </div>
    <div>
      <button className='bg-white p-2 px-10  rounded-2xl text-xl font-semibold'>Box <br />OUTONO
      </button>
    </div>
  </div>

  <div className='flex flex-col items-center py-10 gap-2'>
    <div>
      {/* <img src={BoxPrimavera} alt="" /> */}
    </div>
    <div>
      <button className='bg-white p-2 px-10  rounded-2xl text-xl font-semibold'>Box <br />Primavera
      </button>
    </div>
  </div>
</div>


</div>

    
</div>

</header>

  
  <h1 className='font-normal text-center text-6xl my-11 bg-[#CBE484]  w-fit mx-auto px-8 py-2 rounded-2xl'>
  Qual faz seu tipo ? 
  </h1>


  <div className='grid grid-cols-3  text-center my-16 gap-10 mx-auto container '>

    <div className='bg-[#f1faee] flex flex-col   rounded-3xl shadow-neutral-500 shadow-2xl'>
        {/* <div><img src={MiniBox} alt="" className=' rounded-t-3xl  w-full h-80 object-cover' /></div> */}

        <div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-3xl  font-semibold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'> MINI BOX</h2>
    <p>Box tamanho pequeno.<br/>
    Perfeita para experimentar uma variedade de frutas e legumes frescos em pequenas quantidades.</p>
    <button className='bg-[#EEBA0B]  py-4 px-2 w-1/2 rounded-xl hover:bg-lime-700 hover:underline text-white font-medium text-xl'>Eu quero</button>
    </div>
    
    </div>

    <div className='bg-[#f1faee] flex flex-col   rounded-3xl shadow-neutral-500 shadow-2xl'>
        {/* <div><img src={BigBox} alt="" className=' rounded-t-3xl  w-full h-80 object-cover' /></div> */}

        <div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-3xl  font-semibold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'> BIG BOX</h2>
    <p>Box tamanho grande.<br/>
    
Caixa mais completa para aqueles que adoram ter uma abundância de frutas e legumes frescos e deliciosos sempre à disposição.</p>
    <button className='bg-[#d00000]  py-4 px-2 w-1/2 rounded-xl hover:bg-lime-700 hover:underline text-white font-medium text-xl'>Eu quero</button>
    </div>
    
    </div>

    <div className='bg-[#f1faee] flex flex-col   rounded-3xl shadow-neutral-500 shadow-2xl'>
        {/* <div><img src={Box1} alt="" className=' rounded-t-3xl  w-full h-80 object-cover' /></div> */}

        <div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-3xl  font-semibold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'> MÉDIA BOX</h2>
    <p>Box tamanho médio.<br/>
Caixa ideal para quem deseja manter uma seleção e quantidades suficientes para satisfazer a todos com sabor e variedade.</p>
    <button className='bg-[#EB4901]  py-4 px-2 w-1/2 rounded-xl hover:bg-lime-700 hover:underline text-white font-medium text-xl'>Eu quero</button>
    </div>
    
    </div>
  </div>


<div className='grid grid-cols-2  text-center my-16 gap-10 mx-auto container bg-[#e0edc5] shadow-neutral-400 shadow-lg rounded-3xl     p-14 '>

<div className='   px-10   rounded-3xl items-center justify-center my-auto flex flex-col'>

<p className='mt-10 text-center text-2xl font-semibold leading-relaxed text-[#134611]'>  <span className=' text-3xl font-bold  bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'>OLHA QUE LEGAL!!</span> <br />Em poucos dias teremos um lançamento de uma <span className='font-bold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'>NOVA BOX</span> </p>

  <p className='mt-10 text-center text-2xl  font-semibold leading-relaxed  text-[#134611]'>  <span className=' font-bold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'>Em breve</span> você terá a oportunidade de montar sua própria Box e escolher seus alimentos de acordo com as suas necessidades. </p>
  <p className='mt-10 text-center text-2xl  font-semibold leading-relaxed   text-[#134611]'> Na   <span className=' font-bold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'>Box personalizada</span>  você poderá escolher  frutas e legumes diretamente da horta. </p>



</div>

<div className='bg-[#f1faee] flex flex-col   rounded-3xl shadow-neutral-500 shadow-2xl'>
        {/* <div><img src={BoxPersonalizada} alt="" className=' rounded-t-3xl  w-full h-80 object-cover' /></div> */}

        <div className='gap-4 flex flex-col p-5 items-center justify-center h-full  '>
    <h2 className='text-3xl  font-semibold bg-gradient-to-r from-orange-700 to-yellow-500 bg-clip-text text-transparent'>BOX PERSONALIZADA</h2>
    
    <p>Box personalizada de acordo com sua preferência e escolha.</p>
    <button className='bg-[#d00000]  py-4 px-2 w-1/2 rounded-xl  text-[#FFF616] font-semibold text-2xl'>EM BREVE</button>
    </div>
    
    </div>

</div>

<div className='grid grid-cols-2 text-center gap-6 my-10 text-3xl container mx-auto leading-relaxed  font-light text-white'>

<div className='bg-lime-700 p-16 w-full rounded-3xl  my-auto justify-center h-full '>
  <p> Nossas Boxs são cuidadosamente montadas com frutas e legumes  frescos e sazonais, garantindo qualidade e sabor em cada caixa. </p>
</div>
<div className='bg-lime-700 p-16 w-full rounded-3xl my-auto justify-center h-full'>
  <p> Com NutriBox, você apoia a agricultura local , contribui com ONGs que combatem à  fome  e desfruta de uma alimentação nutritiva e deliciosa. Escolha NutriBox e transforme sua rotina com frutas e legumes de qualidade superior.</p>
</div>


</div>

{/* carrossel */}

<div className='relative container mx-auto'>
<Slider {...settings} >

    



<div className=' container mx-auto my-10 rounded-3xl fundoCardPrimavera  '>
  

  <div className='leading-relaxed flex flex-col gap-5 text-center mx-auto my-auto text-2xl p-10'>
    
    <h3 className='text-yellow-500 text-4xl font-bold'>BOX PRIMAVERA</h3>
    <p className='text-white'> Aproveite a diversidade e o frescor das frutas desta estação, como os morangos suculentos e os maracujás aromáticos. A primavera é o momento perfeito para renovar suas energias com alimentos leves e refrescantes.</p>
  
  <div className='grid grid-cols-2 gap-4 mx-auto'>
  <div className='bg-white  bg-opacity-65 p-10 text-center rounded-3xl'>
  <h4 className='text-3xl  rounded-3xl p-1 my-5 text-[#134611] font-semibold'> Algumas frutas da safra da Primavera</h4>
  
  
  <div className='grid grid-cols-2 mx-auto text-orange-600 font-medium '>

 
  <li>Abacate</li>
  <li>Abacaxi</li>
  <li>Acerola</li>
  <li>Ameixa</li>
  <li>Amora</li>
  <li>Banana</li>
  <li>Mexerica</li>
  <li>Morango</li>
  <li>Coco</li>
  
  <li>Jabuticaba</li>
  
  <li>Laranja</li>
  <li>Mamão</li>
  <li>Manga</li>
  <li>Maracujá</li>
  </div>


</div>

<div className='bg-white  bg-opacity-65 p-10 text-center rounded-3xl'>
  <h4 className='text-3xl  rounded-3xl p-1 my-5 text-[#134611] font-semibold'> Alguns legumes da safra da Primavera</h4>
  <div className='grid grid-cols-2 mx-auto text-orange-600 font-medium'>

 
<li>Abóbora</li>
<li>Batata-doce</li>
<li>Berinjela</li>
<li>Beterraba</li>
<li>Brócolis</li>
<li>Cenoura</li>
<li>Couve</li>



<li>Couve-flor</li>
<li>Espinafre</li>
<li>Pepino</li>
<li>Pimentão</li>
<li>Tomate</li>
<li>Rúcula</li>
<li>Cogumelo</li>

</div>
</div>

</div>

  </div>
  
</div>

<div className=' container mx-auto my-10 rounded-3xl fundoCardPrimavera '>
  <div className='leading-relaxed flex flex-col gap-5 text-center mx-auto my-auto text-2xl p-10'>
    <h3 className='text-yellow-500 text-4xl font-bold'>BOX VERÃO</h3>
    <p className='text-white'> Refresque-se com as frutas  e legumes mais saborosos e nutritivos da estação mais quente do ano. Mangas doces, abacaxis suculentos e uvas refrescantes são ideais para criar sobremesas leves e saudáveis, perfeitas para os dias ensolarados.</p>
  
  <div className='grid grid-cols-2 gap-4 mx-auto'>
  <div className='bg-white  bg-opacity-65 p-10 text-center rounded-3xl'>
  <h4 className='text-3xl  rounded-3xl p-1 my-5 text-[#134611] font-semibold'> Algumas frutas da safra do Verão</h4>
  
  
  <div className='grid grid-cols-2 mx-auto text-orange-600 font-medium '>

 
  <li>Abacate</li>
  <li>Abacaxi</li>
  <li>Melancia</li>
  <li>Uva</li>
  <li>Manga</li>
  <li>Banana-prata</li>
  <li>Carambola</li>
  <li>Cereja</li>
  <li>Coco verde</li>
  <li>Cupuaçu</li>
  <li>Damasco</li>
  <li>Figo</li>
  <li>Framboesa</li>
  <li>Fruta do conde</li>
  </div>


</div>

<div className='bg-white  bg-opacity-65 p-10 text-center rounded-3xl'>
  <h4 className='text-3xl  rounded-3xl p-1 my-5 text-[#134611] font-semibold'> Alguns legumes da safra do Verão</h4>
  <div className='grid grid-cols-2 mx-auto text-orange-600 font-medium'>

 
  <li>Beterraba</li>
  <li>Pimentão</li>
  <li>Quiabo</li>
  <li>Abóbora</li>
  <li>Abobrinha</li>
  <li>Tomate</li>
  <li>Pepino</li>
  <li>Almeirão</li>
  <li>Chicória</li>
  <li>Escarola</li>
  <li>Espinafre</li>
  <li>Repolho</li>
  <li>Rúcula</li>
  <li>Cebolinha</li>

</div>
</div>

</div>

  </div>
</div>

<div className=' container mx-auto my-10 rounded-3xl fundoCardPrimavera '>
  <div className='leading-relaxed flex flex-col gap-5 text-center mx-auto my-auto text-2xl p-10'>
    <h3 className='text-yellow-500 text-4xl font-bold'>BOX OUTONO</h3>
    <p className='text-white'> Aprecie a abundância e a variedade das frutas e legumes do outono, como maçãs crocantes e figos doces. Esta estação é excelente para desfrutar de frutas que trazem conforto e calor, ideais para receitas e lanches saudáveis.</p>
  
  <div className='grid grid-cols-2 gap-4 mx-auto'>
  <div className='bg-white  bg-opacity-65 p-10 text-center rounded-3xl'>
  <h4 className='text-3xl  rounded-3xl p-1 my-5 text-[#134611] font-semibold'> Algumas frutas da safra do Outono</h4>
  
  
  <div className='grid grid-cols-2 mx-auto text-orange-600 font-medium '>

 
  <li>Caqui</li>
  <li>Coco (seco)</li>
  <li>Figo</li>
  <li>Graviola</li>
  <li>Kiwi</li>
  <li>Mamão</li>
  <li>Manga</li>
  <li>Pera</li>
  <li>Tangerina</li>
  <li>Banana</li>
  <li>Goiaba</li>
  <li>Maçã</li>
  <li>Uva</li>
  <li>Laranja</li>
  </div>


</div>

<div className='bg-white  bg-opacity-65 p-10 text-center rounded-3xl'>
  <h4 className='text-3xl  rounded-3xl p-1 my-5 text-[#134611] font-semibold'> Alguns legumes da safra do Outono</h4>
  <div className='grid grid-cols-2 mx-auto text-orange-600 font-medium'>

 
  <li>Abóbora</li>
  <li>Abobrinha</li>
  <li>Batata-doce</li>
  <li>Berinjela</li>
  <li>Beterraba</li>
  <li>Cenoura</li>
  <li>Chuchu</li>
  <li>Inhame</li>
  <li>Mandioca</li>
  <li>Mandioquinha</li>
  <li>Milho-verde</li>
  <li>Palmito</li>
  <li>Rabanete</li>
  <li>Tomate</li>

</div>
</div>

</div>

  </div>
</div>


<div className=' container mx-auto my-10 rounded-3xl fundoCardPrimavera '>
  <div className='leading-relaxed flex flex-col gap-5 text-center mx-auto my-auto text-2xl p-10'>
    <h3 className='text-yellow-500 text-4xl font-bold'>BOX INVERNO</h3>
    <p className='text-white'>Desfrute de frutas ricas em vitaminas C e nutrientes que ajudam a fortalecer o sistema imunológico nos dias mais frios. A laranja e a mexirica, por exemplo, são excelentes fontes de vitamina C, enquanto o abacate oferece gorduras saudáveis para sua dieta.</p>
  
  <div className='grid grid-cols-2 gap-4 mx-auto'>
  <div className='bg-white  bg-opacity-65 p-10 text-center rounded-3xl'>
  <h4 className='text-3xl  rounded-3xl p-1 my-5 text-[#134611] font-semibold'> Algumas frutas da safra do Inverno</h4>
  
  
  <div className='grid grid-cols-2 mx-auto text-orange-600 font-medium '>

 
  <li>Laranja-lima</li>
  <li>Mexirica</li>
  <li>Kiwi</li>
  <li>Lima da Pérsia</li>
  <li>Sapoti</li>
  <li>Pera</li>
  <li>Maçã</li>
  <li>Morango</li>
  <li>Mamão</li>
  <li>Carambola</li>
  <li>Abacate</li>
  <li>Ameixa</li>
  <li>Caqui</li>
  <li>Jaca</li>
  </div>


</div>

<div className='bg-white  bg-opacity-65 p-10 text-center rounded-3xl'>
  <h4 className='text-3xl  rounded-3xl p-1 my-5 text-[#134611] font-semibold'> Alguns legumes da safra do Inverno</h4>
  <div className='grid grid-cols-2 mx-auto text-orange-600 font-medium'>

 
  <li>Abóbora</li>
  <li>Abobrinha</li>
  <li>Batata-doce</li>
  <li>Berinjela</li>
  <li>Beterraba</li>
  <li>Cenoura</li>
  <li>Chuchu</li>
  <li>Inhame</li>
  <li>Mandioca</li>
  <li>Mandioquinha</li>
  <li>Milho-verde</li>
  <li>Palmito</li>
  <li>Rabanete</li>
  <li>Tomate</li>

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