import './Navbar.css'
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="color-navbar w-full bg-green-700 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase"> Nutribox</div>

          <div className="flex gap-4">
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/home" className="hover:underline">
              Inicio
            </Link>
            <Link to="/sobreNos" className="hover:underline">
              Sobre Nós
            </Link>
            <Link to="/catalogo" className="hover:underline">
              Catalógo
            </Link>
            <div className="hover:underline">Minha Conta</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
