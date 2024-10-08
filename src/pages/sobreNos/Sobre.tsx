import React from 'react'
import imageHeaderSobre from "../../assets/image-sobre.png"
import fazendeiro from "../../assets/fazendeiro-page-sobre.png"
import CardValores from '../../components/valores/CardValores';
import { useNavigate } from 'react-router-dom';
import imageCard1 from "../../assets/card1.png";
import imageCard2 from "../../assets/card2.png";
import imageCard3 from "../../assets/card3.jpg";
import imageCard4 from "../../assets/card4.jpg";
import iconCard1 from "../../assets/icon1.png";
import iconCard2 from "../../assets/icon2.png";
import iconCard3 from "../../assets/icon3.png";
import iconCard4 from "../../assets/icon4.png";


  function Sobre() {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate('/catalogo');
    }

    const cardsData = [
      { 
        title: 'Agricultura', 
        description: 'Valorizamos a agricultura local e pequenos produtores orgânicos que cultivam alimentos frescos e sustentáveis.', 
       
        image: imageCard1, 
        icon: iconCard1 
      },
      { 
        title: 'Combate à Fome', 
        description: 'A cada compra, metade do lucro apoia iniciativas sociais e fortalece comunidades ao combate à fome.', 
        image: imageCard2, 
        icon: iconCard2 
      },
      { 
        title: 'Saúde', 
        description: 'Uma alimentação equilibrada beneficia a saúde e o bem-estar, priorizamos a nutrição em cada caixa.', 
        image: imageCard3, 
        icon: iconCard3 
      },
      { 
        title: 'Orgânico', 
        description: 'Apoiadores de práticas sustentáveis, nossas caixas são montadas seguindo os princípios da agricultura orgânica.', 
        image: imageCard4, 
        icon: iconCard4 
      },
    ];

  return (
    <>
   <header className='bg-[#C1CF84] shadow-md'>
  <div className='flex flex-col items-center justify-center gap-10 w-full h-auto px-4 py-8 md:flex-row  md:h-[336px]'>
    <h1 className='text-4xl md:text-5xl font-semibold text-center'>
      Nutrindo <br />
      <span className='text-5xl md:text-6xl font-bold text-[#EB4901]'>Vidas</span>
    </h1>
    <img className='w-[300px] md:w-[550px] mr-0 md:mt-40  top-32' src={imageHeaderSobre} alt="foto com muitas frutas orgânicas" />
    <h1 className='text-4xl md:text-5xl font-semibold text-center'>
      Plantando <br />
      <span className='text-5xl md:text-6xl font-bold text-[#EB4901]'>Esperança</span>
    </h1>
  </div>
</header>

<main className='bg-[#F7F8F8]'>
  <div className='flex justify-center'>
    <div className='bg-[#FFFFFF] flex flex-col md:flex-row justify-around mt-[176px] mb-[81px] rounded-3xl w-full max-w-[1010px] h-auto drop-shadow-2xl px-4'>
      <div className='flex flex-col items-center text-4xl p-6 gap-8'>
        <h2 className='text-2xl text-black text-center font-semibold'>Como funciona?</h2>
        <p className='text-xl text-black text-center'>
          A Nutribox conecta consumidores a pequenos produtores de alimentos orgânicos, oferecendo caixas pré-selecionadas com alimentos de alta qualidade.
        </p>
        <button
          type='submit'
          onClick={handleNavigate}
          className="rounded-md bg-[#EB4901] w-full max-w-[280px] py-4 flex justify-center text-xl font-semibold mx-auto text-[#FFFFFF] hover:bg-[#FB7F01]"
        >
          VEM PRA HORTA!
        </button>
      </div>
      <img className="w-full max-w-[487px] h-auto" src={fazendeiro} alt="fazendeiro carregando frutas orgânicas" />
    </div>
  </div>
  <div className='bg-[#C1CF84] w-full mx-auto'>
    <div className='container mx-auto text-center'>
      <div className='h-auto p-9 mb-60 flex justify-center gap-8 md:gap-0 flex-wrap md:justify-between'>
        {cardsData.map((card, index) => (
          <CardValores
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  </div>
  <div className='container mx-auto'>
    <div className='h-auto bg-[#C1CF84] mb-24 flex flex-col md:flex-row mx-4 rounded-2xl'>
      <iframe
        className='h-[80vw] md:h-[40vw] w-full md:w-[800px] rounded-2xl'
        src="https://www.youtube.com/embed/QFQyg1UxXvA?si=czUcTuTyVQBPJf7k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className='flex flex-col  w-full md:w-[558px] my-auto gap-8 p-10 mx-auto'>
        <h2 className='font-medium text-2xl md:text-4xl mb-4 text-center'>CONHEÇA MAIS SOBRE NOSSOS PRODUTORES!</h2>
        <p className='text-center text-xl'>
          Ao escolher NutriBox, você não apenas adquire uma alimentação saudável, mas também fortalece diretamente iniciativas sustentáveis e estimula produtores locais. Conheça mais sobre nossos produtores e descubra como estamos transformando a forma de consumir alimentos com responsabilidade e consciência ambiental.
        </p>
      </div>
    </div>
  </div>
</main>
  </>
  )
}

export default Sobre