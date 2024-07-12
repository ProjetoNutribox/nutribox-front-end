import React from 'react';

function CardValores({ title, description, image, icon }) {
  return (
    <div className='flex flex-col w-72 h-96 bg-[#FFFFFF] gap-4 rounded-xl shadow-md'>
      <img className='rounded-t-xl' src={image} alt="" />
      <div className='flex items-center gap-2 mx-auto'>
        <h2>{title}</h2>
        <img className='w-8 h-8' src={icon} alt="" />
      </div>
      <div className='mx-10'>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardValores;
