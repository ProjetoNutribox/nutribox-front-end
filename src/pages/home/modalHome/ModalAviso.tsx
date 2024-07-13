import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./ModalAviso.css";

function ModalAviso() {
  //   return (
  //     <Popup
  //       trigger={
  //         <button className='bg-[#FB7F01] py-4 px-2 w-1/2 rounded-xl hover:bg-[#EEBA0B]'>
  //           Personalize
  //         </button>
  //       }
  //       modal
  //       contentStyle={{ width: 'auto' }}
  //     >
  //       <div className="modal-content">
  //         <img src="https://i.ibb.co/VgkNFPD/Em-breve.png" alt="Aviso" className='w-full h-auto' />
  //       </div>
  //     </Popup>
  //   );
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <button className="bg-[#FB7F01] py-4 px-8 w-full  rounded-xl hover:bg-[#EEBA0B]" onClick={() => setOpen(o => !o)}>
        Personalize
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          <img
            src="https://i.ibb.co/VgkNFPD/Em-breve.png"
            alt=""
            className="w-full"
          />
        </div>
      </Popup>
    </div>
  );
}

export default ModalAviso;
